import React from 'react';
import { CircleLoader } from 'components/basic/status';
import { ViewProps } from './ActionButton-types';
import { ActionButton, Label } from './ActionButton-styles';

/** A button that is used to confirm form entries or perform individual actions. */
export const ActionButtonView: React.FC<ViewProps> = React.memo(
  ({ type, kind, color, label, onClick, disabled, loading }) => (
    <ActionButton
      className={`ActionButton ${kind}${loading ? ' loading' : ''}`}
      type={type}
      color={color}
      disabled={disabled}
      onClick={loading ? undefined : onClick}
    >
      <Label>{label}</Label>
      {loading && <CircleLoader color={kind === 'primary' ? 'background' : color} size="small" />}
    </ActionButton>
  )
);

export default ActionButtonView;
