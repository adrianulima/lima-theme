const fs = require("fs");
const path = require("path");
const { settingsByColor, scopesByColor } = require("./theme");

function generateSettings(settingsByColor) {
  return Object.keys(settingsByColor)
    .reduce((acc, color) => {
      return [
        ...acc,
        ...settingsByColor[color].reduce((acc2, setting) => {
          acc2.push(`"${setting}": "${color}"`);
          return acc2;
        }, []),
      ];
    }, [])
    .sort()
    .join(",\n    ");
}

function generateScopes(scopesByColor) {
  const scopes = Object.keys(scopesByColor).map((color) => {
    const colorScopes = scopesByColor[color];
    return `{
      "scope": [\n        ${colorScopes
        .map((scope) => `"${scope}"`)
        .sort()
        .join(",\n        ")}
      ],
      "settings": {
        "foreground": "${color}"
      }
    }`;
  });
  return scopes.join(",\n    ");
}

const content = `{
  "name": "Adrianulima Theme",
  "type": "dark",
  "colors": {
    ${generateSettings(settingsByColor)}
  },
  "tokenColors": [
    ${generateScopes(scopesByColor)}
  ]
}`;

const filePath = path.join(__dirname, `../themes/adrianulima-color-theme.json`);
fs.writeFileSync(filePath, content);

console.log("Theme generated!");
