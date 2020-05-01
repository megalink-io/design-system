/** Helper function to get a random ID with uppercase, lowercase and numbers. */
const getRandomId = (length: number) => {
  let randomId = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i += 1) {
    randomId += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randomId;
};

export default getRandomId;
