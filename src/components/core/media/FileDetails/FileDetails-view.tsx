import React from 'react';
import { Detail } from 'components/core/typography';
import { ViewProps } from './FileDetails-types';
import { FileDetails, Image } from './FileDetails-styles';

/**
 * An overview of the details of a file. If possible,
 * a preview of the file is displayed at the top.
 */
export const FileDetailsView: React.FC<ViewProps> = React.memo(({ file }) => {
  const storageSize = file.srcset.reduce(
    (size, setFile) => size + setFile.size,
    file.size
  );
  const storageSizeInBytes = storageSize.toLocaleString();
  const storageSizeInMb = (
    Math.round((storageSize / 1048576) * 10) / 10
  ).toLocaleString();
  const created = file.created.toLocaleString();
  const modified = file.modified.toLocaleString();

  return (
    <FileDetails className="FileDetails">
      <Image
        src={file.src}
        srcSet={file.srcset
          .sort((a, b) => (a.width > b.width ? 1 : -1))
          .map((setFile) => `${setFile.src} ${setFile.width}w`)
          .concat([`${file.src} ${file.width}w`])
          .join()}
        sizes="(max-width: 768px) calc(100vw - 40px), (max-width: 1200px) 700px, 375px"
      />
      <Detail>Type: {file.type}</Detail>
      <Detail>
        Storage used: {storageSizeInMb} MB ({storageSizeInBytes} bytes)
      </Detail>
      <Detail>Created: {created}</Detail>
      <Detail>Modified: {modified}</Detail>
    </FileDetails>
  );
});

export default FileDetailsView;
