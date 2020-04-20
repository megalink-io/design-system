import React from 'react';
import { ViewProps } from './FileGallery-types';
import { FileGallery, ItemLink, ItemChild, Image } from './FileGallery-styles';

const FileGalleryView: React.FC<ViewProps> = ({
  rootPathname,
  device,
  files,
  getSizeAttribute,
}) => (
  <FileGallery className="FileGallery">
    {files.map(file => (
      <ItemLink key={file.id} to={`${rootPathname}/${file.id}`} replace={device === 'desktop'}>
        <ItemChild>
          {file.type.includes('image') && (
            <Image
              src={file.src}
              srcSet={file.srcset
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
