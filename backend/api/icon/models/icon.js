"use strict";

const si = require("simple-icons");

const convert = require("color-convert");

const icons = new Map();

for (const icon in si) {
  const i = si.get(icon);
  icons.set(i.title.toLowerCase(), i);
}

const parse = (data) => {
  const icon = icons.get(data.title.toLowerCase());

  if (!icon) throw strapi.errors.badRequest("Could not find: " + data.title);
  const { hex, path, title } = icon;

  data.title = title;
  data.content = path;

  if (hex) {
    const hsv = convert.hex.hsv(hex);
    if (hsv[2] <= 20) {
      data.fill = null;
    } else {
      const hsl = convert.hex.hsl(hex);
      if (hsl[2] < 35) {
        hsl[2] = 35;
      } else if (hsl[2] > 65) {
        hsl[2] = 65;
      }
      data.fill = "#" + convert.hsl.hex(hsl);
    }
  }

  if (
    !data.viewbox ||
    !/([0-9.]+) ([0-9.]+) ([0-9.]+) ([0-9.]+)/i.exec(data.viewbox)
  )
    data.viewbox = "0 0 24 24";

  return data;
};

module.exports = {
  lifecycles: {
    beforeCreate: (data) => {
      data = parse(data);
    },
    beforeUpdate: (params, data) => {
      data = parse(data);
    },
  },
};
