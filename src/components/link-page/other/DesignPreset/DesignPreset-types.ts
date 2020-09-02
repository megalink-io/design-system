type Alignment = 'left' | 'center' | 'right';
type FontFamily = 'poppins' | 'open_sans' | 'gelasio' | 'roboto_mono';
type Shape = 'angular' | 'rounded' | 'round';
type BackgroundVariant = 'filled' | 'outlined';
type ShadowVariant = 'none' | 'soft' | 'hard';

export type Design = {
  document: {
    backgroundVariant: 'color' | 'line_gradient';
    backgroundColor?: string;
    backgroundLineGradient?: string;
  };
  elements: {
    default: {
      alignment: Alignment;
      fontFamily: FontFamily;
      fontColor: string;
      shape: Shape;
      backgroundVariant: BackgroundVariant;
      backgroundColor: string;
      shadowVariant: ShadowVariant;
      shadowColor?: string;
    };
    avatar?: {
      fontFamily?: FontFamily;
      fontColor?: string;
      shape?: Shape;
      shadowVariant?: ShadowVariant;
      shadowColor?: string;
    };
    button?: {
      fontFamily?: FontFamily;
      fontColor?: string;
      shape?: Shape;
      backgroundVariant?: BackgroundVariant;
      backgroundColor?: string;
      shadowVariant?: ShadowVariant;
      shadowColor?: string;
    };
    image?: {
      shape?: Shape;
      backgroundVariant?: BackgroundVariant;
      backgroundColor?: string;
      shadowVariant?: ShadowVariant;
      shadowColor?: string;
    };
    socialIcons?: {
      backgroundColor?: string;
    };
  };
};

export interface ContainerProps {
  selected: boolean;
  onClick: (design: Design) => void;
  design: Design;
}

export interface ViewProps {
  className: string;
  onClick: () => void;
  design: Design;
  fontSvg: React.ReactNode;
}
