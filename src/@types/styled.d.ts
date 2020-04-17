import 'styled-components';
import * as Types from 'types';

declare module 'styled-components' {
  export interface DefaultTheme extends Types.DefaultTheme {}
}
