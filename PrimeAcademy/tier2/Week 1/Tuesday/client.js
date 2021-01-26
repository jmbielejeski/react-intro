console.log('good morning');

const topHat = {
  type: 'Top', //objects property - Key and Value
  color: 'Black',
  size: 14,
};

console.log(topHat.color);
console.log(topHat.size);
console.log(topHat.type);

const baseballCap = {
  type: 'Baseball Cap',
  color: 'Red and White',
  size: 12,
};

const hatColorPropKey = 'color';

console.log(baseballCap.type);
console.log(baseballCap['color']);
console.log(baseballCap[hatColorPropKey]);
