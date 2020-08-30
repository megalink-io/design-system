/* eslint-disable no-bitwise */
import { getSortedObject } from 'helpers';

/** Helper function to get a hash code from a string, number or object. */
const getHashCode = (source: string | number | object) => {
  let sourceString: string;
  if (typeof source === 'number') {
    sourceString = source.toString();
  } else if (typeof source === 'object') {
    sourceString = JSON.stringify(getSortedObject(source));
  } else {
    sourceString = source;
  }
  let hash = 0;
  let char: number;
  for (let i = 0; i < sourceString.length; i += 1) {
    char = sourceString.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
};

export default getHashCode;
