const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1
  const separator = options.separator || '+'
  const addition = options.addition !== undefined ? String(options.addition) : ''
  const additionRepeatTimes = options.additionRepeatTimes || 1
  const additionSeparator = options.additionSeparator || '|'

  let string = ''

  const repeatedAddition = Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator)

  for (let i = 0; i < repeatTimes; i++) {
    string += str + repeatedAddition

    if (i < repeatTimes - 1) {
      string += separator
    }
  }

  return string
}

module.exports = {
  repeater
};
