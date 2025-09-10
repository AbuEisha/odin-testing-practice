export const capitalize = (str) => {
  if (!str || str === "") return "";

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
};

export const reverseString = (str) => {
  if (!str || str === "") return "";

  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

export const calculator = {
  add: (a, b) => {
    if (isNaN(a) || isNaN(b)) return "You Should Enter Two Numbers";
    return a + b;
  },
  subtract: (a, b) => {
    if (isNaN(a) || isNaN(b)) return "You Should Enter Two Numbers";
    return a - b;
  },
  divide: (a, b) => {
    if (isNaN(a) || isNaN(b)) return "You Should Enter Two Numbers";
    if (b === 0) return "Can't Divide By Zero";
    return a / b;
  },
  multiply: (a, b) => {
    if (isNaN(a) || isNaN(b)) return "You Should Enter Two Numbers";
    return a * b;
  },
};

export const caesarCipher = (str, shift) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let hexCode = str.charCodeAt(i);
    if (hexCode >= 65 && hexCode <= 90) {
      hexCode = checkHex(hexCode, 65, 90);
      result += String.fromCharCode(hexCode);
    } else if (hexCode >= 97 && hexCode <= 122) {
      hexCode = checkHex(hexCode, 97, 122);
      result += String.fromCharCode(hexCode);
    } else {
      result += str[i];
    }
  }

  function checkHex(hex, min, max) {
    if (hex + shift > max) {
      hex = min + (hex + shift - max) - 1;
    } else {
      hex = hex + shift;
    }
    return hex;
  }

  return result;
};

export const analyzeArray = (array) => {
  if (!Array.isArray(array)) return {};
  let object = {};
  let arrLength = array.length;
  let result = 0;
  for (let num of array) {
    if (!isNaN(+num)) result += +num;
  }

  object.average = result / arrLength;

  object.min = Math.min(...array);

  object.max = Math.max(...array);

  object.length = arrLength;

  return object;
};
