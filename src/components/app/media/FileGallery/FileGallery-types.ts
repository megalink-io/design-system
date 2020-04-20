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
  rootPathname: string;
  device: Types.Device;
  files: ImageFile[];
}

export interface ViewProps extends ContainerProps {
  getSizeAttribute: (imgWidth: number, imgHeight: number) => string;
}
