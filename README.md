# Lima Color Theme for VSCode

![lima-theme-preview](https://github.com/adrianulima/lima-theme/blob/main/assets/lima-theme-preview.png?raw=true)

## Features

- Minimal color scheme for simplicity
- Borderless editor and panels for a clean interface
- Line numbers displayed only for the current line
- Indentation guides only for the current block
- No active line highlighting for a distraction-free experience
- Background color seamlessly integrates with macOS Dark Mode

## Install

1. Go to [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=AdrianoLima.adrianulima-theme).
2. Click the Install button.
3. Then [select a theme](https://code.visualstudio.com/docs/getstarted/themes#_selecting-the-color-theme).

## Recommended User Settings for minimal style [Optional]

You can experiment each setting individually to find the best balance for your workflow.

```json
{
  "workbench.colorTheme": "adrianulima-theme",
  "workbench.activityBar.location": "top",
  "window.customTitleBarVisibility": "never",
  "workbench.layoutControl.enabled": false,
  "window.commandCenter": false,
  "editor.minimap.enabled": false,
  "editor.overviewRulerBorder": false,
  "editor.bracketPairColorization.enabled": false,
  "editor.guides.bracketPairsHorizontal": false,
  "editor.semanticHighlighting.enabled": false
}
```

## Override this theme

To customize a theme in your personal configuration file, please refer to the [color theme](https://code.visualstudio.com/api/extension-guides/color-theme) documentation. This is useful for making small adjustments without the need to fork and maintain your own theme.

## Contribute

This is a personal theme, so I'm not going to accept PRs with changes to the theme colors. But if you find a bug or have a suggestion, please open an issue or a PR.

Run the project locally:

```bash
git clone https://github.com/adrianulima/lima-theme.git
cd lima-theme
npm run build
```
