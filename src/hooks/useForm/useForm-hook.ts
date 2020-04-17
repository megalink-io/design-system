import { useState, useLayoutEffect, useEffect } from 'react';
import {
  TextInputInfo,
  CheckboxInfo,
  FieldInfos,
  Fields,
  TextInput,
  Checkbox,
  Button,
  Response,
} from './useForm-types';

// Use fieldInfos argument to create initial fields state
const getInitalFields = (fieldInfos: FieldInfos) => {
  const initalFields: Fields = {};
  Object.keys(fieldInfos).forEach(name => {
    switch (fieldInfos[name].type) {
      case 'text_input':
        initalFields[name] = {
          name,
          value: (fieldInfos[name] as TextInputInfo).value || '',
          error: '',
          onChange: () => null,
          onBlur: () => null,
        };
        break;
      case 'checkbox':
        initalFields[name] = {
          name,
          selected: (fieldInfos[name] as CheckboxInfo).selected || false,
          error: false,
          onChange: () => null,
        };
        break;
      default:
    }
  });
  return initalFields;
};

/** Custom React hook for handling the business logic of forms. */
const useForm = (fieldInfos: FieldInfos) => {
  // Create state variables that holds current form data
  const [fields, setFields] = useState<Fields>(() => getInitalFields(fieldInfos));
  const [button, setButton] = useState<Button>({ loading: false });
  const [response, setResponse] = useState<Response>({ status: '', message: '' });

  // Add onChange and onBlur functions to form fields
  useLayoutEffect(() => {
    // Update or validate field state after synthetic event
    const handleFieldEvent = (
      name: string,
      state: string | boolean,
      eventType: 'change' | 'blur'
    ) => {
      setFields(prevState => {
        const newState = { ...prevState, [name]: { ...prevState[name] } };
        switch (fieldInfos[name].type) {
          case 'text_input':
            if (typeof state === 'string') {
              if (eventType === 'change') {
                (newState[name] as TextInput).value = state;
              }
              if (eventType === 'blur' || prevState[name].error) {
                newState[name].error = (fieldInfos[name] as TextInputInfo).validation(
                  state,
                  prevState
                );
              }
            }
            break;
          case 'checkbox':
            if (typeof state === 'boolean') {
              if (eventType === 'change') {
                (newState[name] as Checkbox).selected = state;
              }
              if (eventType === 'blur' || prevState[name].error) {
                newState[name].error = (fieldInfos[name] as CheckboxInfo).validation(
                  state,
                  prevState
                );
              }
            }
            break;
          default:
        }
        return newState;
      });
    };

    // Update and validate field state after a user input
    const handleFieldChange = (name: string, state: string | boolean) => {
      handleFieldEvent(name, state, 'change');
    };

    // Validate field state after user has left a form field
    const handleFieldBlur = (name: string, state: string | boolean) => {
      handleFieldEvent(name, state, 'blur');
    };

    // Add handleFieldChange and handleFieldBlur to fields state
    setFields(prevState => {
      const newState: Fields = {};
      Object.keys(fieldInfos).forEach(name => {
        newState[name] = { ...prevState[name] };
        switch (fieldInfos[name].type) {
          case 'text_input':
            (newState[name] as TextInput).onChange = handleFieldChange;
            (newState[name] as TextInput).onBlur = handleFieldBlur;
            break;
          case 'checkbox':
            (newState[name] as Checkbox).onChange = handleFieldChange;
            break;
          default:
        }
      });
      return newState;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reset form response after 10 seconds
  useEffect(() => {
    if (response.message) {
      const timeout = setTimeout(() => {
        setResponse({ status: '', message: '' });
      }, 10000);
      return () => clearTimeout(timeout);
    }
    return () => null;
  }, [response]);

  // Action function that handles final form validation
  const finalValidation = () => {
    let formIsValid = true;
    setFields(prevState => {
      const newState: Fields = {};
      Object.keys(fieldInfos).forEach(name => {
        newState[name] = { ...prevState[name] };
        let newError: string | boolean | undefined;
        switch (fieldInfos[name].type) {
          case 'text_input':
            newError = (fieldInfos[name] as TextInputInfo).validation(
              (prevState[name] as TextInput).value,
              prevState
            );
            newState[name].error = newError;
            break;
          case 'checkbox':
            newError = (fieldInfos[name] as CheckboxInfo).validation(
              (prevState[name] as Checkbox).selected,
              prevState
            );
            newState[name].error = newError;
            break;
          default:
        }
        if (newError && formIsValid) {
          formIsValid = false;
        }
      });
      return newState;
    });
    if (!formIsValid) {
      const error = new Error('Please check the red marked fields.');
      error.name = 'UseFormValidationError';
      throw error;
    }
  };

  // Action function that sets a form field error
  const setFieldError = (name: string, error: string) => {
    setFields(prevState => {
      const newState = { ...prevState, [name]: { ...prevState[name] } };
      newState[name].error = error;
      return newState;
    });
  };

  // Return form state and action functions
  return {
    fields,
    button,
    response,
    actions: {
      setButton,
      setResponse,
      finalValidation,
      setFieldError,
    },
  };
};

export default useForm;
