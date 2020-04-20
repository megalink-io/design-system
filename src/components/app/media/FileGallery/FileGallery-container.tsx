import React from 'react';
import { ContainerProps } from './FileGallery-types';
import FileGalleryView from './FileGallery-view';

const FileGalleryContainer: React.FC<ContainerProps> = props => {
  const getSizeAttribute = (imgWidth: number, imgHeight: number) => {
    if (imgWidth > imgHeight) {
      const aspectRatio = imgWidth / imgHeight;
      const mobileSize = `(max-width: 768px) calc((33vw - 27px) * ${aspectRatio})`;
      const defaultSize = `calc((700px / 3 - 33px) * ${aspectRatio})`;
      return `${mobileSize}, ${defaultSize}`;
    }
    return '(max-width: 768px) calc(33vw - 27px), calc(700px / 3 - 33px)';
  };

  return <FileGalleryView {...props} getSizeAttribute={getSizeAttribute} />;
};

export default FileGalleryContainer;
