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
      0: '#FFFFFF' | '#313131';
      100: '#FFFEE5' | '#46442C';
      200: '#FFFBCC' | '#5A5627';
      300: '#FFF9B2' | '#6F6922';
      400: '#FFF799' | '#837B1D';
      500: '#FFF57F' | '#988E18';
      600: '#FFF366' | '#ADA114';
      700: '#FFF14C' | '#C2B40F';
      800: '#FFEF33' | '#D6C60A';
      900: '#FFED19' | '#EBD905';
      1000: '#FFEB00';
    };
    red: {
      0: '#FFFFFF' | '#313131';
      100: '#FFEFF0' | '#463637';
      200: '#FFDFE1' | '#5A3A3C';
      300: '#FFCED2' | '#6F3E42';
      400: '#FFBFC3' | '#834347';
      500: '#FFAEB4' | '#98474D';
      600: '#FF9FA5' | '#AD4D53';
      700: '#FF8E96' | '#C25159';
      800: '#FF7F87' | '#D6565E';
      900: '#FF6E78' | '#EB5A64';
      1000: '#FF5F6A';
    };
    blue: {
      0: '#FFFFFF' | '#313131';
      100: '#EBFAFF' | '#324146';
      200: '#D8F5FF' | '#33505A';
      300: '#C4EFFF' | '#345F6F';
      400: '#B1EAFF' | '#366E83';
      500: '#9EE4FF' | '#377D98';
      600: '#8BDFFF' | '#398DAD';
      700: '#77DAFF' | '#3C9CC2';
      800: '#64D4FF' | '#3BABD6';
      900: '#50CFFF' | '#3CBBEB';
      1000: '#3ECAFF';
    };
    green: {
      0: '#FFFFFF' | '#313131';
      100: '#E8FFF0' | '#2F4637';
      200: '#D3FEE1' | '#2E593C';
      300: '#BCFDD2' | '#2C6D42';
      400: '#A7FDC3' | '#2B8147';
      500: '#90FBB4' | '#29944D';
      600: '#7BFBA5' | '#29A953';
      700: '#64FA96' | '#27BE59';
      800: '#4FF987' | '#26D05E';
      900: '#38F878' | '#24E464';
      1000: '#23F86A';
    };
  };
}

export type SVGProps = React.SVGProps<SVGSVGElement> & {
  title?: string;
};
