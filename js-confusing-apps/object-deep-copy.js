const deepCopy = (obj) => {
  if(typeof obj === 'object') {
  return Object.keys(obj)
    .map(k => ({ [k]: deepCopy(obj[k]) }))
    .reduce((a, c) => Object.assign(a, c), {});
  } else if(Array.isArray(obj)) {
    return obj.map(deepCopy)
  }
  return obj;
}

/**
 * 
 * using lodash utility lib
 * import * as cloneDeep from 'lodash/cloneDeep';
 * cloneDeep(data)
 */