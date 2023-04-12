const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
let res = {}
for (let dom of domains){
  for (let i=0; i< (dom.split('.').reverse()).length; i++){
    let n = '.' + dom.split('.').reverse().slice(0, i+1).join('.');
if (!res[n]){
  res[n]=1
} else{
  res[n]++
}
  }
}
return res
}

module.exports = {
  getDNSStats
};
