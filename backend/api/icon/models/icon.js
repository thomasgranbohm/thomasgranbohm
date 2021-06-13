'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const HEX_COLOR_REGEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

const hexToHSL = (hex) => {
  let result = HEX_COLOR_REGEX.exec(hex);
  if (result == null) return hex;

  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);

  (r /= 255), (g /= 255), (b /= 255);
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  s = Math.round(s * 100);
  l = Math.round(l * 100);
  h = Math.round(h * 360);
  return [h, s, l];
};

const parse = (data) => {
  if (data.fill) {
    const { fill } = data;
    if (HEX_COLOR_REGEX.exec(fill)) {
      let [h, s, l] = hexToHSL(fill);
      if (l < 35) {
        l = 35;
        data.fill = `hsl(${h}, ${s}%, ${l}%)`;
      } else if (l > 65) {
      	l = 65;
      	data.fill = `hsl(${h}, ${s}%, ${l}%)`;
      } else if (!fill.startsWith("#")) {
        data.fill = `#${fill}`;
      }
    }
  }
  return data;
};

module.exports = {
  lifecycles: {
    beforeCreate(data) {
      data = parse(data);
    },
    beforeUpdate(params, data) {
      data = parse(data);
    },
  },
};
