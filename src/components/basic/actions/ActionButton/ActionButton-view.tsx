import React from 'react';
import { CircleLoader } from 'components/basic/status';
import { ViewProps, ButtonProps, InternalLinkProps, ExternalLinkProps } from './ActionButton-types';
import { ActionButton, InternalLink, ExternalLink, Label } from './ActionButton-styles';

/** A button that is used to confirm form entries or perform individual actions. */
export const ActionButtonView: React.FC<ViewProps> = React.memo(
  ({ label, variant, type, color, ...props }) => {
    const { onClick, loading, disabled } = props as ButtonProps;
    const { to, replace } = props as InternalLinkProps;
    const { href, target, download } = props as ExternalLinkProps;

    const className = `ActionButton ${variant}${loading ? ' loading' : ''}`;

    // ActionButton to navigate for external links
    if (typeof href === 'string') {
      return (
        <ExternalLink
          className={className}
          aria-label={label}
          color={color}
          href={href}
          target={target}
          rel={target ? 'noreferrer noopener' : undefined}
          download={download}
        >
          <Label>{label}</Label>
        </ExternalLink>
      );
    }

    // ActionButton to navigate for internal links
    if (type === 'link') {
      return (
        <InternalLink
          className={className}
          aria-label={label}
          color={color}
          to={to}
          replace={replace}
        >
          <Label>{label}</Label>
        </InternalLink>
      );
    }

    // ActionButton to confirm form entries or perform actions
    return (
      <ActionButton
        className={className}
        aria-label={label}
        type={type}
        color={color}
        disabled={disabled}
        onClick={loading ? undefined : onClick}
      >
        <Label>{label}</Label>
        {loading && (
          <CircleLoader color={variant === 'primary' ? 'background' : color} size="small" />
        )}
      </ActionButton>
    );
  }
);

export default ActionButtonView;
