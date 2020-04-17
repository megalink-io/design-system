/** Helper function to get a URL search parameter by name. */
const getSearchParam = (name: string) => {
  const results = new RegExp(`[?&]${name}=([^&]*)`).exec(window.location.search);
  if (!results) return null;
  if (!results[1]) return '';
  return decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export default getSearchParam;
