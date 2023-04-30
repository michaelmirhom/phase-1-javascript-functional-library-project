
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        callback(collection[key], key, collection);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      for (let key in collection) {
        result.push(callback(collection[key], key, collection));
      }
    }
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let startingIndex = 0;
    let keys = Object.keys(collection);
    let values = keys.map(key => collection[key]);
  
    if (acc === undefined) {
      acc = values[0];
      startingIndex = 1;
    }
  
    for (let i = startingIndex; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
    return acc;
  }
  
  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
        break;
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    let result = [];
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        result.push(collection[i]);
      }
    }
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // Array Functions
  
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  function mySortBy(array, callback) {
    return array.slice().sort(function(a, b) {
      if (typeof a === 'number' && typeof b === 'number') {
        return callback(a) - callback(b);
      } else {
        return callback(a).localeCompare(callback(b));
      }
    });
  }
  
  function myFlatten(array, shallow, newArr=[]) {
    if (shallow) {
      return newArr.concat(...array);
    } else {
      myEach(array, function(element) {
        if (Array.isArray(element)) {
          myFlatten(element, false, newArr);
        } else {
          newArr.push(element);
        }
      });
      return newArr;
    }
  }
  
  // Object Functions
  
  function myKeys(object) {
    let result = [];
    for (let key in object) {
      result.push(key);
    }
    return result;
  }
  
  function myValues(object) {
    let result = [];
    for (let key in object) {
      result.push(object[key]);
    }
    return result;
  }
  
  function myEntries(object) {
    let result = [];
    for (let key in object) {
      result.push([key, object[key]]);
    }
    return result;
  }
  
