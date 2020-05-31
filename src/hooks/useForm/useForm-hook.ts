import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  TextInputInfo,
  TextInputState,
  TextInputUpdate,
  TextInput,
  DropdownInfo,
  DropdownState,
  DropdownUpdate,
  Dropdown,
  CheckboxInfo,
  CheckboxState,
  CheckboxUpdate,
  Checkbox,
  FieldsInfo,
  FieldsState,
  FieldsUpdate,
  Fields,
  ResponseState,
  ResponseUpdate,
  ButtonState,
  ButtonUpdate,
  Form,
} from './useForm-types';

// Use fieldsInfo argument to create initial fields state
const getInitFieldsState = (fieldsInfo: FieldsInfo) => {
  const initState: FieldsState = {};
  Object.keys(fieldsInfo).forEach(name => {
    switch (fieldsInfo[name].type) {
      case 'text_input':
        initState[name] = {
          value: (fieldsInfo[name] as TextInputInfo).value || '',
          error: '',
        };
        break;
      case 'dropdown':
        initState[name] = {
          value: (fieldsInfo[name] as DropdownInfo).value || '',
          error: '',
        };
        break;
      case 'checkbox':
        initState[name] = {
          selected: (fieldsInfo[name] as CheckboxInfo).selected || false,
          error: false,
        };
        break;
      default:
    }
  });
  return initState;
};

/** Custom React hook for handling the business logic of forms. */
const useForm = (fieldsInfo: FieldsInfo): Form => {
  // Create inital fields state
  const initFieldsState = useMemo<FieldsState>(() => getInitFieldsState(fieldsInfo), [fieldsInfo]);

  // Create fields, response and button state
  const [fieldsState, setFieldsState] = useState<FieldsState>(initFieldsState);
  const [responseState, setResponseState] = useState<ResponseState>({ status: '', message: '' });
  const [buttonState, setButtonState] = useState<ButtonState>({ loading: false });

  // Update fields state if fields info changes
  useEffect(() => {
    setFieldsState(initFieldsState);
  }, [initFieldsState]);

  // Reset form response after 10 seconds
  useEffect(() => {
    if (responseState.message) {
      const timeout = setTimeout(() => {
        setResponseState({ status: '', message: '' });
      }, 10000);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [responseState]);

  // Update or validate field state after synthetic event
  const handleFieldEvent = useCallback(
    (name: string, value: string | boolean, eventType: 'change' | 'blur') => {
      setFieldsState(prevState => {
        const newState = { ...prevState, [name]: { ...prevState[name] } };
        switch (fieldsInfo[name].type) {
          case 'text_input':
            if (typeof value === 'string') {
              if (eventType === 'change') {
                (newState[name] as TextInputState).value = value;
              }
              if (eventType === 'blur' || prevState[name].error) {
                newState[name].error = (fieldsInfo[name] as TextInputInfo).validate(
                  value,
                  prevState
                );
              }
            }
            break;
          case 'dropdown':
            if (typeof value === 'string') {
              if (eventType === 'change') {
                (newState[name] as DropdownState).value = value;
              }
              if (eventType === 'blur' || prevState[name].error) {
                newState[name].error = (fieldsInfo[name] as DropdownInfo).validate(
                  value,
                  prevState
                );
              }
            }
            break;
          case 'checkbox':
            if (typeof value === 'boolean') {
              if (eventType === 'change') {
                (newState[name] as CheckboxState).selected = value;
              }
              if (eventType === 'blur' || prevState[name].error) {
                newState[name].error = (fieldsInfo[name] as CheckboxInfo).validate(
                  value,
                  prevState
                );
              }
            }
            break;
          default:
        }
        return newState;
      });
    },
    [fieldsInfo]
  );

  // Update and validate field state after a user input
  const handleFieldChange = useCallback(
    (name: string, value: string | boolean) => {
      handleFieldEvent(name, value, 'change');
    },
    [handleFieldEvent]
  );

  // Validate field state after user has left a form field
  const handleFieldBlur = useCallback(
    (name: string, value: string | boolean) => {
      handleFieldEvent(name, value, 'blur');
    },
    [handleFieldEvent]
  );

  // Creat memoized fields properties
  const fields = useMemo<Fields>(() => {
    const newFields: Fields = {};
    Object.keys(fieldsInfo).forEach(name => {
      switch (fieldsInfo[name].type) {
        case 'text_input':
          (newFields[name] as TextInput) = {
            ...(fieldsState[name] as TextInputState),
            name,
            onChange: handleFieldChange,
            onBlur: handleFieldBlur,
          };
          break;
        case 'dropdown':
          (newFields[name] as Dropdown) = {
            ...(fieldsState[name] as DropdownState),
            name,
            options: (fieldsInfo[name] as DropdownInfo).options,
            onChange: handleFieldChange,
            onBlur: handleFieldBlur,
          };
          break;
        case 'checkbox':
          (newFields[name] as Checkbox) = {
            ...(fieldsState[name] as CheckboxState),
            name,
            onChange: handleFieldChange,
            onBlur: handleFieldBlur,
          };
          break;
        default:
      }
    });
    return newFields;
  }, [fieldsInfo, fieldsState, handleFieldChange, handleFieldBlur]);

  // Update fields state with given data
  const updateFields = useCallback(
    (fieldsUpdate: FieldsUpdate) => {
      setFieldsState(prevState => {
        const newState = { ...prevState };
        Object.keys(fieldsUpdate).forEach(name => {
          switch (fieldsInfo[name].type) {
            case 'text_input':
              (newState[name] as TextInputState) = {
                ...(prevState[name] as TextInputState),
                ...(fieldsUpdate[name] as TextInputUpdate),
              };
              break;
            case 'dropdown':
              (newState[name] as DropdownState) = {
                ...(prevState[name] as DropdownState),
                ...(fieldsUpdate[name] as DropdownUpdate),
              };
              break;
            case 'checkbox':
              (newState[name] as CheckboxState) = {
                ...(prevState[name] as CheckboxState),
                ...(fieldsUpdate[name] as CheckboxUpdate),
              };
              break;
            default:
          }
        });
        return newState;
      });
    },
    [fieldsInfo]
  );

  // Update response state with given data
  const updateResponse = useCallback((responseUpdate: ResponseUpdate) => {
    setResponseState(prevState => ({
      ...prevState,
      ...responseUpdate,
    }));
  }, []);

  // Update button state with given data
  const updateButton = useCallback((buttonUpdate: ButtonUpdate) => {
    setButtonState(prevState => ({
      ...prevState,
      ...buttonUpdate,
    }));
  }, []);

  // Validate fields state when submitting the form
  const validate = useCallback(() => {
    let formIsValid = true;
    const fieldsUpdate: FieldsUpdate = {};
    Object.keys(fieldsInfo).forEach(name => {
      let newError: string | boolean | undefined;
      switch (fieldsInfo[name].type) {
        case 'text_input':
          newError = (fieldsInfo[name] as TextInputInfo).validate(
            (fieldsState[name] as TextInputState).value,
            fieldsState
          );
          break;
        case 'dropdown':
          newError = (fieldsInfo[name] as DropdownInfo).validate(
            (fieldsState[name] as DropdownState).value,
            fieldsState
          );
          break;
        case 'checkbox':
          newError = (fieldsInfo[name] as CheckboxInfo).validate(
            (fieldsState[name] as CheckboxState).selected,
            fieldsState
          );
          break;
        default:
      }
      if (newError) {
        formIsValid = false;
        fieldsUpdate[name] = {
          error: newError,
        };
      }
    });
    if (!formIsValid) {
      updateFields(fieldsUpdate);
      const error = new Error('Please check the red marked fields.');
      error.name = 'UseFormValidationError';
      throw error;
    }
  }, [fieldsInfo, fieldsState, updateFields]);

  // Check if form has changes
  const hasChanges = useCallback(() => {
    return Object.keys(fieldsInfo).some(name => {
      let initalValue: string | boolean;
      let currentValue: string | boolean;
      switch (fieldsInfo[name].type) {
        case 'text_input':
          initalValue = (fieldsInfo[name] as TextInputInfo).value || '';
          currentValue = (fieldsState[name] as TextInputState).value;
          return initalValue !== currentValue;
        case 'dropdown':
          initalValue = (fieldsInfo[name] as DropdownInfo).value || '';
          currentValue = (fieldsState[name] as DropdownState).value;
          return initalValue !== currentValue;
        case 'checkbox':
          initalValue = (fieldsInfo[name] as CheckboxInfo).selected || false;
          currentValue = (fieldsState[name] as CheckboxState).selected;
          return initalValue !== currentValue;
        default:
          return false;
      }
    });
  }, [fieldsInfo, fieldsState]);

  // Return the form data and functions
  return {
    fields,
    response: responseState,
    button: buttonState,
    updateFields,
    updateResponse,
    updateButton,
    validate,
    hasChanges,
  };
};

export default useForm;
