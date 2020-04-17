import * as Types from 'types';

/** Helper function to get the prefers color scheme of the device. */
const getDeviceColorScheme = (): Types.ColorScheme => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

export default getDeviceColorScheme;
