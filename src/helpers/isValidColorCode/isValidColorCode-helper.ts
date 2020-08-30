/**
 * Helper function to check if a color code complies with
 * the HEX, HEXA, RGB, RGBA, HSL or HSLA standard.
 * */
const isValidColorCode = (colorCode: string) => {
  const hex = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})\b$/;
  const hexa = /^#([a-fA-F0-9]{8}|[a-fA-F0-9]{4})\b$/;
  const rgb = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
  const rgba = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)\)$/;
  const hsl = /^hsl\(\s*(\d+)\s*,\s*(\d*(?:\.\d+)?%)\s*,\s*(\d*(?:\.\d+)?%)\)$/;
  const hsla = /^hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)$/;
  if (
    hex.test(colorCode) ||
    hexa.test(colorCode) ||
    rgb.test(colorCode) ||
    rgba.test(colorCode) ||
    hsl.test(colorCode) ||
    hsla.test(colorCode)
  ) {
    return true;
  }
  return false;
};

export default isValidColorCode;
