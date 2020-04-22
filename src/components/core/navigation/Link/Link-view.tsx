import React from 'react';
import { ViewProps, InternalLinkProps, ExternalLinkProps } from './Link-types';
import { ExternalLink, InternalLink } from './Link-styles';

/**
 * A navigation link that takes users to other content or allows
 * them to download files. Contained text is underlined.
 * */
export const LinkView: React.FC<ViewProps> = React.memo(({ children, ...props }) => {
  const { to, replace } = props as InternalLinkProps;
  const { href, target, download } = props as ExternalLinkProps;

  // For external link
  if (typeof href === 'string') {
    return (
      <ExternalLink
        className="Link"
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
    <InternalLink className="Link" to={to} replace={replace}>
      {children}
    </InternalLink>
  );
});

export default LinkView;
