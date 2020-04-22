import React, { useContext } from 'react';
import { DeviceType } from 'context';
import { ContainerProps } from './FileGallery-types';
import FileGalleryView from './FileGallery-view';

/**
 * A gallery that displays files in an overview. Each file is
 * linked to its subpage, which contains further information.
 * */
export const FileGalleryContainer: React.FC<ContainerProps> = React.memo(props => {
  const [deviceType] = useContext(DeviceType);

  const getSizeAttribute = (imgWidth: number, imgHeight: number) => {
    if (imgWidth > imgHeight) {
      const aspectRatio = imgWidth / imgHeight;
      const mobileSize = `(max-width: 768px) calc((33vw - 27px) * ${aspectRatio})`;
      const defaultSize = `calc((700px / 3 - 33px) * ${aspectRatio})`;
      return `${mobileSize}, ${defaultSize}`;
    }
    return '(max-width: 768px) calc(33vw - 27px), calc(700px / 3 - 33px)';
  };

  return <FileGalleryView {...props} deviceType={deviceType} getSizeAttribute={getSizeAttribute} />;
});

export default FileGalleryContainer;
