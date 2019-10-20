/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > maxProfit) {
        maxProfit = prices[j] - prices[i];
      }
    }
  }
  return maxProfit;
};

var maxProfit1 = function(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]), "---max");
console.log(maxProfit([7, 6, 4, 3, 1]), "---max");
console.log(maxProfit([1, 2]), "---max");

console.log(maxProfit1([7, 1, 5, 3, 6, 4]), "---max");
console.log(maxProfit1([7, 6, 4, 3, 1]), "---max");
console.log(maxProfit1([1, 2]), "---max");
