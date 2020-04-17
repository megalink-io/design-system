export type DeviceType = 'mobile' | 'tablet' | 'desktop';
export type ColorScheme = 'light' | 'dark';

export interface DefaultTheme {
  colorScheme: 'light' | 'dark';
  colors: {
    white: {
      0: '#313131';
      50: '#3C3C3C';
      75: '#404040';
      100: '#464646';
      200: '#5A5A5A';
      300: '#6F6F6F';
      400: '#838383';
      500: '#989898';
      600: '#ADADAD';
      700: '#C2C2C2';
      800: '#D6D6D6';
      900: '#EBEBEB';
      1000: '#FFFFFF';
    };
    black: {
      0: '#FFFFFF';
      50: '#F4F4F4';
      75: '#EFEFEF';
      100: '#EAEAEA';
      200: '#D5D5D5';
      300: '#C0C0C0';
      400: '#ACACAC';
      500: '#979797';
      600: '#838383';
      700: '#6E6E6E';
      800: '#5A5A5A';
      900: '#454545';
      1000: '#313131';
    };
    gray: {
      0: '#FFFFFF' | '#313131';
      50: '#F4F4F4' | '#3C3C3C';
      75: '#EFEFEF' | '#404040';
      100: '#EAEAEA' | '#464646';
      200: '#D5D5D5' | '#5A5A5A';
      300: '#C0C0C0' | '#6F6F6F';
      400: '#ACACAC' | '#838383';
      500: '#979797' | '#989898';
      600: '#838383' | '#ADADAD';
      700: '#6E6E6E' | '#C2C2C2';
      800: '#5A5A5A' | '#D6D6D6';
      900: '#454545' | '#EBEBEB';
      1000: '#313131' | '#FFFFFF';
    };
    yellow: {
      100: '#FFFEE5' | '#46442C';
      400: '#FFF799' | '#837B1D';
      700: '#FFF14C' | '#C2B40F';
      1000: '#FFEB00';
    };
    red: {
      100: '#FFEFF0' | '#463637';
      400: '#FFBFC3' | '#834347';
      700: '#FF8E96' | '#C25159';
      1000: '#FF5F6A';
    };
    blue: {
      100: '#EBFAFF' | '#324146';
      400: '#B1EAFF' | '#366E83';
      700: '#77DAFF' | '#3C9CC2';
      1000: '#3ECAFF';
    };
    green: {
      100: '#E8FFF0' | '#2F4637';
      400: '#A7FDC3' | '#2B8147';
      700: '#64FA96' | '#27BE59';
      1000: '#23F86A';
    };
  };
}
