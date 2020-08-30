/**
 * Helper function that sorts nested
 * objects and arrays alphabetically.
 */
const getSortedObject = (unsorted: any) => {
  let sorted: any;
  const objectType = Object.prototype.toString.call(unsorted);
  switch (objectType) {
    case '[object Array]':
      sorted = unsorted.sort().map((value: any) => getSortedObject(value));
      break;
    case '[object Object]':
      sorted = {};
      Object.keys(unsorted)
        .sort()
        .forEach(key => {
          sorted[key] = getSortedObject(unsorted[key]);
        });
      break;
    default:
      sorted = unsorted;
  }
  return sorted;
};

export default getSortedObject;
