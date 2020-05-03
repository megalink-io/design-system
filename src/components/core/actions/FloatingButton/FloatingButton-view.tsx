import React from 'react';
import { CircleLoader } from 'components/core/status';
import {
  ViewProps,
  ButtonProps,
  InternalLinkProps,
  ExternalLinkProps,
} from './FloatingButton-types';
import { FloatingButton, InternalLink, ExternalLink } from './FloatingButton-styles';

/** A button with an icon that is used to navigate or perform small actions. */
const FloatingButtonView: React.FC<ViewProps> = ({
  icon,
  label,
  color,
  type,
  className,
  ...props
}) => {
  const { onClick, loading, disabled } = props as ButtonProps;
  const { to, replace } = props as InternalLinkProps;
  const { href, target, download } = props as ExternalLinkProps;

  // FloatingButton to navigate for external links
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
        {icon}
      </ExternalLink>
    );
  }

  // FloatingButton to navigate for internal links
  if (type === 'link') {
    return (
      <InternalLink
        className={className}
        aria-label={label}
        color={color}
        to={to}
        replace={replace}
      >
        {icon}
      </InternalLink>
    );
  }

  // FloatingButton to perform small actions
  return (
    <FloatingButton
      className={className}
      aria-label={label}
      color={color}
      type={type}
      onClick={loading ? undefined : onClick}
      disabled={disabled}
    >
      {loading ? <CircleLoader color="background" size="small" /> : icon}
    </FloatingButton>
  );
};

export default FloatingButtonView;
