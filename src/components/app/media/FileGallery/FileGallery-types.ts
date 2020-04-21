import * as Types from 'types';

interface ImageFile {
  id: string;
  type: string;
  src: string;
  size: number;
  width: number;
  height: number;
  srcset: {
    src: string;
    size: number;
    width: number;
    height: number;
  }[];
}

export interface ContainerProps {
  rootPath: string;
  files: ImageFile[];
}

export interface ViewProps extends ContainerProps {
  deviceType: Types.DeviceType;
  getSizeAttribute: (imgWidth: number, imgHeight: number) => string;
}
