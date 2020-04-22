interface ImageFile {
  id: string;
  created: Date;
  modified: Date;
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

export interface ViewProps {
  file: ImageFile;
}
