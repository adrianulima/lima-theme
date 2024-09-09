const blendColors = (color1, color2, mix) => {
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  };

  const rgbToHex = (r, g, b) => {
    return (
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
  };

  const [r1, g1, b1] = hexToRgb(color1);
  const [r2, g2, b2] = hexToRgb(color2);

  const r = Math.round(r1 * (1 - mix) + r2 * mix);
  const g = Math.round(g1 * (1 - mix) + g2 * mix);
  const b = Math.round(b1 * (1 - mix) + b2 * mix);

  return rgbToHex(r, g, b);
};

module.exports = {
  blendColors,
};
