/** Helper function to get the device type by viewport width. */
const getDeviceType = () => {
  if (window.innerWidth <= 768) return 'mobile';
  if (window.innerWidth <= 1200) return 'tablet';
  return 'desktop';
};

export default getDeviceType;
