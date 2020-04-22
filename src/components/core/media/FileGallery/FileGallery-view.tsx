import React from 'react';
import { ViewProps } from './FileGallery-types';
import { FileGallery, ItemLink, ItemChild, Image } from './FileGallery-styles';

const FileGalleryView: React.FC<ViewProps> = ({
  rootPath,
  deviceType,
  files,
  getSizeAttribute,
}) => (
  <FileGallery className="FileGallery">
    {files.map(file => (
      <ItemLink key={file.id} to={`${rootPath}/${file.id}`} replace={deviceType === 'desktop'}>
        <ItemChild>
          {file.type.includes('image') && (
            <Image
              src={file.src}
              srcSet={file.srcset
                .sort((a, b) => (a.width > b.width ? 1 : -1))
                .map(setFile => `${setFile.src} ${setFile.width}w`)
                .concat([`${file.src} ${file.width}w`])
                .join()}
              sizes={getSizeAttribute(file.width, file.height)}
            />
          )}
        </ItemChild>
      </ItemLink>
    ))}
  </FileGallery>
);

export default FileGalleryView;
