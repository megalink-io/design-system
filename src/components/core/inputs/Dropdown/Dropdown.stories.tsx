import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { useForm, UseForm } from '../../../../hooks';
import Dropdown from '.';

interface Props {
  storyId: 'default' | 'slim';
}

const fieldsInfo: UseForm.FieldsInfo = {
  example: {
    type: 'dropdown',
    options: [
      {
        label: 'Option 1',
        value: 'option_1',
      },
      {
        label: 'Option 2',
        value: 'option_2',
      },
      {
        label: 'Option 3',
        value: 'option_3',
      },
      {
        label: 'Option 4',
        value: 'option_4',
      },
      {
        label: 'Option 5',
        value: 'option_5',
      },
      {
        label: 'Option 6',
        value: 'option_6',
      },
      {
        label: 'Option 7',
        value: 'option_7',
      },
      {
        label: 'Option 8',
        value: 'option_8',
      },
      {
        label: 'Option 9',
        value: 'option_9',
      },
    ],
    validate: function(value) {
      if (!this.options.some(option => option.value === value)) {
        return 'Please select an option.';
      }
      return '';
    },
  },
};

export const DropdownPreview: React.FC<Props> = ({ storyId }) => {
  const form = useForm(fieldsInfo);

  return (
    <Dropdown
      {...(form.fields.example as UseForm.Dropdown)}
      label={storyId !== 'slim' ? text('Label', 'Options') : undefined}
      placeholder={text('Placeholder', 'Select an option')}
      required={boolean('Required', true)}
      disabled={boolean('Disabled', false)}
      slim={storyId === 'slim'}
    />
  );
};

export default {
  title: 'Components/core/inputs/Dropdown',
  includeStories: [],
};
