import React from 'react';
import { CircleLoader } from 'components/basic/status';
import { ViewProps, ButtonProps, InternalLinkProps, ExternalLinkProps } from './IconButton-types';
import { IconButton, InternalLink, ExternalLink, Counter } from './IconButton-styles';

/** A button with an icon that is used to navigate or perform small actions. */
export const IconButtonView: React.FC<ViewProps> = React.memo(
  ({ icon, label, variant, color, type, counter, ...props }) => {
    const { onClick, loading, disabled } = props as ButtonProps;
    const { to, replace, exact } = props as InternalLinkProps;
    const { external, href, target, download } = props as ExternalLinkProps;

    const className = `IconButton ${variant}${loading ? ' loading' : ''}`;

    // IconButton to navigate for external links
    if (type === 'link' && external) {
      return (
        <ExternalLink
          className={className}
          aria-label={label}
          color={color}
          href={href}
          target={target}
          download={download}
        >
          {counter && <Counter>{counter}</Counter>}
          {icon}
        </ExternalLink>
      );
    }

    // IconButton to navigate for internal links
    if (type === 'link') {
      return (
        <InternalLink
          className={className}
          aria-label={label}
          color={color}
          to={to}
          replace={replace}
          exact={exact}
        >
          {counter && <Counter>{counter}</Counter>}
          {icon}
        </InternalLink>
      );
    }

    // IconButton to perform small actions
    return (
      <IconButton
        className={className}
        aria-label={label}
        color={color}
        type={type}
        onClick={loading ? undefined : onClick}
        disabled={disabled}
      >
        {counter && <Counter>{counter}</Counter>}
        {loading ? (
          <CircleLoader color={variant === 'primary' ? 'background' : color} size="small" />
        ) : (
          icon
        )}
      </IconButton>
    );
  }
);

export default IconButtonView;
