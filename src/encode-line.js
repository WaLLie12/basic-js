const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strRes = ''
  let num = 1
  let strLett = ''

  for (let i = 0; i < str.length; i++) {
    const element = str[i]
    if (element !== strLett) {
      if (strLett && num > 1) {
        strRes += num + strLett
      } else if (strLett) {  
        strRes += strLett
      }
      num = 1
      strLett = element
    } else {
      num++
    }
  }

  if (num > 1) {
    strRes += num + strLett
  } else {
    strRes += strLett
  }

  return strRes
}

module.exports = {
  encodeLine
};
