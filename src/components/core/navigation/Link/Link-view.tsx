import React from 'react';
import { ViewProps, InternalLinkProps, ExternalLinkProps } from './Link-types';
import { ExternalLink, InternalLink } from './Link-styles';

/**
 * A navigation link that takes users to other content or allows
 * them to download files. Contained text is underlined.
 */
export const LinkView: React.FC<ViewProps> = React.memo(
  ({ underlined, children, ...props }) => {
    const { to, replace } = props as InternalLinkProps;
    const { href, target, download } = props as ExternalLinkProps;

    const className = `Link${underlined ? ' underlined' : ''}`;

    // For external link
    if (typeof href === 'string') {
      return (
        <ExternalLink
          className={className}
          href={href}
          target={target}
          rel={target ? 'noreferrer noopener' : undefined}
          download={download}
        >
          {children}
        </ExternalLink>
      );
    }

    // For internal links
    return (
      <InternalLink className={className} to={to} replace={replace}>
        {children}
      </InternalLink>
    );
  }
);

export default LinkView;
