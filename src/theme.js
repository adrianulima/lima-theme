const addAlphaColors = (colors) => {
  return Object.keys(colors).reduce((acc, color) => {
    return {
      ...acc,
      [color]: {
        base: colors[color],
        a05: colors[color].slice(0, 7) + "05",
        a33: colors[color].slice(0, 7) + "33",
        a66: colors[color].slice(0, 7) + "66",
        a99: colors[color].slice(0, 7) + "99",
        acc: colors[color].slice(0, 7) + "cc",
      },
    };
  }, {});
};

const colors = addAlphaColors({
  background: "#282828",
  dark: "#101010",
  green: "#a0f0d0",
  primary: "#a0d0f0",
  purple: "#d0a0f0",
  red: "#f0a0d0",
  secondary: "#90a0b0",
  transparent: "#00000000",
  white: "#e0f0f0",
  yellow: "#f0d0a0",
});

const scopesByColor = {
  [colors.primary.base]: [
    "*link*",
    "*uri*",
    "*url*",
    "beginning.punctuation.definition.list.markdown",
    "constant.character.escape",
    "constant.other.reference.link.markdown",
    "entity.name.function",
    "entity.name.function.method",
    "entity.name.tag",
    "entity.name.type",
    "entity.name.type.alias",
    "entity.other.attribute-name.class",
    "entity.other.inherited-class",
    "fenced_code.block.language",
    "keyword-meta.export",
    "keyword.control.new",
    "keyword.operator.new",
    "keyword.other.important",
    "markup.deleted.git_gutter",
    "markup.inline.raw.markdown",
    "markup.inserted",
    "markup.list.unnumbered.markdown",
    "markup.quote punctuation.definition.blockquote.markdown",
    "markup.raw.block",
    "markup.table",
    "markup.underline.link.markdown",
    "meta.block meta.var.expr meta.function-call entity.name.function",
    "meta.class entity.name.class",
    "meta.class entity.name.type.class",
    "meta.class meta.field.declaration meta.function-call entity.name.function",
    "meta.class meta.function-call variable.function",
    "meta.class meta.group.braces.curly meta.function-call variable.function",
    "meta.function-call support.function",
    "meta.image.inline.markdown string.other.link.description.title.markdown",
    "meta.import string",
    "meta.import string.quoted.double punctuation",
    "meta.import string.quoted.single punctuation",
    "meta.import variable.other.readwrite",
    "meta.import variable.other.readwrite.alias",
    "meta.link.inline.markdown string.other.link.description.title.markdown",
    "meta.link.inline.markdown string.other.link.title.markdown",
    "meta.link.reference.def.markdown markup.underline.link.markdown",
    "meta.link.reference.markdown string.other.link.title.markdown",
    "meta.property.class variable.other.class",
    "meta.tag.sgml",
    "meta.type.declaration",
    "punctuation.definition.bold.markdown",
    "punctuation.definition.entity.css",
    "punctuation.definition.heading.markdown",
    "punctuation.definition.italic.markdown",
    "punctuation.definition.list.begin.markdown",
    "punctuation.definition.markdown",
    "punctuation.definition.raw.markdown",
    "punctuation.definition.tag",
    "punctuation.definition.tag.html",
    "punctuation.separator.inheritance.php",
    "source meta.function-call entity.name.function",
    "source meta.function-call entity.name.function",
    "source meta.method-call entity.name.function",
    "source.cpp meta.block variable.other",
    "source.css support.type.property-name",
    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    "source.json meta.structure.dictionary.json support.type.property-name.json",
    "source.less support.type.property-name",
    "source.postcss support.type.property-name",
    "source.sass support.type.property-name",
    "source.scss support.type.property-name",
    "source.stylus support.type.property-name",
    "string.other.link",
    "string.other.link.description.title.markdown punctuation.definition.string.begin.markdown",
    "string.other.link.description.title.markdown punctuation.definition.string.end.markdown",
    "string.other.link.description.title.markdown punctuation.definition.string.markdown",
    "string.other.link.description.title.markdown",
    "string.other.link.description.title.markdown",
    "string.other.link.title.markdown",
    "string.regexp",
    "support.class",
    "support.class.component",
    "support.constant",
    "support.function.console",
    "support.other.variable",
    "text.html.basic entity.other.attribute-name",
    "text.html.basic entity.other.attribute-name.html",
    "text.html.markdown markup.inline.raw.markdown",
    "token.info-token",
    "variable.function",
    "variable.function.constructor",
    "variable.language",
    "variable.other.constant.object",
    "variable.other.constant.object",
    "variable.other.readwrite.alias",
  ],
  [colors.secondary.base]: [
    "entity.other.attribute-name",
    "log.verbose",
    "markup.bold markup.italic string",
    "markup.bold markup.italic",
    "markup.bold string",
    "markup.bold",
    "markup.deleted",
    "markup.inline.raw.string.markdown",
    "markup.italic markup.bold string",
    "markup.italic markup.bold",
    "markup.italic",
    "markup.quote markup.bold string",
    "markup.quote markup.bold",
    "markup.raw.block.fenced.markdown",
    "markup.underline",
    "meta.definition.property entity.name.function",
    "meta.diff.header.from-file",
    "meta.separator",
    "meta.separator.markdown",
    "meta.tag.attributes keyword.operator.assignment",
    "punctuation.definition.fenced.markdown",
    "punctuation.definition.from-file.diff",
    "punctuation.section.embedded",
    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    "variable.object.property",
  ],
  [colors.white.base]: [
    "constant.other.color",
    "constant.other.color",
    "constant.other.placeholder",
    "entity.name",
    "entity.name.section.markdown",
    "keyword.other.substitution",
    "keyword.other.template",
    "markdown.heading",
    "markup.changed.git_gutter",
    "markup.heading | markup.heading entity.name",
    "markup.heading.markdown punctuation.definition.heading.markdown",
    "markup.heading.text.1.markdown",
    "markup.heading.text.2.markdown",
    "meta.definition.variable variable.other.constant",
    "meta.definition.variable variable.other.readwrite",
    "meta.object-literal.key-meta.object.member",
    "meta.object.member",
    "meta.objectliteral",
    "meta.tag",
    "meta.use.php",
    "punctuation.definition.list_item.markdown",
    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    "string.unquoted",
    "support.other.namespace.php",
    "support.other.namespace.use.php",
    "support.type.object",
    "support.type.sys-types",
    "support.variable.property",
    "text.html.derivative",
    "text.html.markdown",
    "token.debug-token",
    "variable - meta.import",
    "variable.other",
    "variable.other.object",
    "variable.other.object.property",
    "variable.other.property",
    "variable.other.readwrite",
    "variable.parameter",
  ],
  [colors.white.a99]: [
    "comment",
    "keyword.operator",
    "keyword.operator.existential",
    "meta.brace",
    "meta.paragraph.markdown",
    "meta.parameters comment.block",
    "punctuation",
    "punctuation.definition.comment",
  ],
  [colors.purple.base]: [
    "keyword",
    "keyword.control",
    "keyword.control.as",
    "keyword.control.default",
    "keyword.control.export",
    "keyword.control.flow",
    "keyword.control.import",
    "keyword.control.module",
    "keyword.control.trycatch",
    "keyword.operator.expression.void",
    "keyword.other",
    "keyword.other.unit",
    "keyword.type",
    "markup.changed",
    "markup.raw.block.fenced.markdown",
    "meta.class-method entity.name.function",
    "meta.export",
    "meta.import",
    "punctuation.section.class.end",
    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    "storage.modifier",
    "storage.modifier.async",
    "storage.type",
    "support.type",
    "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown",
    "variable.function.constructor",
    "variable.language.fenced.markdown",
    "variable.language.fenced.markdown",
    "variable.language.super",
    "variable.language.this",
  ],
  [colors.green.base]: [
    "constant.character",
    "constant.escape",
    "constant.language",
    "constant.numeric",
    "constant.other.key",
    "constant.other.symbol",
    "markup.heading",
    "markup.inserted.git_gutter",
    "meta.group.braces.curly constant.other.object.key string.unquoted.label",
    "source.sass keyword.control",
    "string",
    "string.quoted.double punctuation",
    "string.quoted.single punctuation",
    "string.template punctuation",
    "support.constant",
  ],
  [colors.red.base]: [
    "constant.language.boolean.false",
    "constant.language.null",
    "constant.language.undefined",
    "invalid",
    "invalid.deprecated",
    "invalid.illegal",
    "keyword.operator.delete",
    "keyword.operator.expression.delete",
    "keyword.operator.void",
    "log.error",
    "log.exception",
    "source.ignore",
    "support.class.error",
    "token.error-token",
  ],
  [colors.yellow.base]: ["token.warn-token"],
};

const settingsByColor = {
  [colors.white.a99]: [
    "activityBar.activeBorder",
    "activityBar.dropBorder",
    "activityBar.foreground",
    "activityBar.inactiveForeground",
    "activityBarBadge.foreground",
    "activityBarTop.activeBorder",
    "activityBarTop.dropBorder",
    "activityBarTop.foreground",
    "activityBarTop.inactiveForeground",
    "charts.foreground",
    "debugConsole.sourceForeground",
    "debugConsoleInputIcon.foreground",
    "debugIcon.breakpointDisabledForeground",
    "debugIcon.breakpointUnverifiedForeground",
    "debugView.stateLabelForeground",
    "editor.foreground",
    "editorCodeLens.foreground",
    "editorCursor.foreground",
    "editorHoverWidget.foreground",
    "editorOverviewRuler.commonContentForeground",
    "editorSuggestWidget.foreground",
    "editorWidget.border",
    "editorWidget.foreground",
    "foreground",
    "icon.foreground",
    "panel.dropBorder",
    "panelTitle.activeBorder",
    "panelTitle.activeForeground",
    "panelTitle.inactiveForeground",
    "sideBar.foreground",
    "statusBar.foreground",
    "statusBar.noFolderForeground",
    "statusBarItem.prominentForeground",
    "tab.activeBorder",
    "tab.activeForeground",
    "tab.inactiveForeground",
    "tab.unfocusedActiveForeground",
    "tab.unfocusedInactiveForeground",
  ],
  [colors.background.base]: [
    "activityBar.background",
    "activityBarTop.background",
    "breadcrumbPicker.background",
    "checkbox.background",
    "dropdown.background",
    "editor.background",
    "editorGroupHeader.noTabsBackground",
    "editorGroupHeader.tabsBackground",
    "editorGutter.background",
    "editorHoverWidget.background",
    "editorMarkerNavigation.background",
    "editorPane.background",
    "editorSuggestWidget.background",
    "editorWidget.background",
    "inputValidation.errorBackground",
    "menu.background",
    "notebook.cellBorderColor",
    "notebook.outputContainerBackgroundColor",
    "notebook.selectedCellBorder",
    "notifications.background",
    "panel.background",
    "panelSection.border",
    "quickInput.background",
    "settings.checkboxBackground",
    "settings.dropdownBackground",
    "sideBar.background",
    "sideBarSectionHeader.background",
    "statusBar.background",
    "statusBar.noFolderBackground",
    "tab.inactiveBackground",
    "tab.unfocusedActiveBackground",
    "tab.unfocusedInactiveBackground",
    "terminal.ansiBlack",
    "titleBar.activeBackground",
    "titleBar.inactiveBackground",
    "welcomePage.tileBackground",
  ],
  [colors.white.acc]: [
    "activityBarBadge.background",
    "editorOverviewRuler.selectionHighlightForeground",
    "editorOverviewRuler.wordHighlightForeground",
  ],
  [colors.secondary.base]: [
    "badge.background",
    "editorGutter.commentRangeForeground",
    "editorGutter.foldingControlForeground",
    "inputValidation.infoBackground",
    "inputValidation.warningBackground",
    "list.deemphasizedForeground",
    "list.dropBackground",
    "list.focusForeground",
    "menu.selectionForeground",
    "menu.separatorBackground",
    "menubar.selectionForeground",
    "notebookStatusRunningIcon.foreground",
    "peekViewResult.lineForeground",
    "pickerGroup.border",
    "quickInput.foreground",
    "selection.background",
    "sideBarSectionHeader.foreground",
    "sideBarTitle.foreground",
    "symbolIcon.arrayForeground",
    "symbolIcon.booleanForeground",
    "symbolIcon.colorForeground",
    "symbolIcon.constantForeground",
    "symbolIcon.fileForeground",
    "symbolIcon.folderForeground",
    "symbolIcon.keyForeground",
    "symbolIcon.keywordForeground",
    "symbolIcon.moduleForeground",
    "symbolIcon.namespaceForeground",
    "symbolIcon.nullForeground",
    "symbolIcon.numberForeground",
    "symbolIcon.objectForeground",
    "symbolIcon.operatorForeground",
    "symbolIcon.packageForeground",
    "symbolIcon.propertyForeground",
    "symbolIcon.referenceForeground",
    "symbolIcon.snippetForeground",
    "symbolIcon.stringForeground",
    "symbolIcon.structForeground",
    "symbolIcon.textForeground",
    "symbolIcon.typeParameterForeground",
    "symbolIcon.unitForeground",
    "terminal.ansiBrightBlack",
    "terminal.foreground",
    "terminalCommandDecoration.defaultBackground",
    "testing.iconSkipped",
    "testing.iconUnset",
    "titleBar.activeForeground",
    "titleBar.inactiveForeground",
  ],
  [colors.white.base]: [
    "badge.foreground",
    "breadcrumb.activeSelectionForeground",
    "breadcrumb.focusForeground",
    "button.foreground",
    "button.secondaryForeground",
    "checkbox.foreground",
    "debugTokenExpression.name",
    "debugView.exceptionLabelForeground",
    "dropdown.foreground",
    "editorOverviewRuler.bracketMatchForeground",
    "extensionBadge.remoteForeground",
    "extensionButton.prominentForeground",
    "input.foreground",
    "inputOption.activeForeground",
    "list.activeSelectionForeground",
    "list.hoverForeground",
    "list.inactiveSelectionForeground",
    "menu.foreground",
    "notifications.foreground",
    "peekViewResult.fileForeground",
    "peekViewResult.selectionForeground",
    "peekViewTitleLabel.foreground",
    "settings.checkboxForeground",
    "settings.dropdownForeground",
    "settings.headerForeground",
    "settings.numberInputForeground",
    "settings.textInputForeground",
    "statusBar.debuggingForeground",
    "statusBarItem.errorForeground",
    "statusBarItem.remoteForeground",
    "terminal.ansiBrightWhite",
    "terminal.ansiWhite",
    "textPreformat.foreground",
  ],
  [colors.transparent.base]: [
    "breadcrumb.background",
    "editor.lineHighlightBorder",
    "editor.selectionHighlightBackground",
    "editorBracketMatch.background",
    "editorGroup.border",
    "editorLineNumber.foreground",
    "editorOverviewRuler.border",
    "focusBorder",
    "inputOption.activeBackground",
    "inputOption.activeBorder",
    "list.activeSelectionBackground",
    "list.focusBackground",
    "list.focusOutline",
    "list.hoverBackground",
    "list.inactiveSelectionBackground",
    "listFilterWidget.outline",
    "notebook.cellInsertionIndicator",
    "notebook.focusedCellBorder",
    "notebook.focusedEditorBorder",
    "notebook.inactiveFocusedCellBorder",
    "panel.border",
    "sash.hoverBorder",
    "scrollbar.shadow",
    "settings.focusedRowBackground",
    "tab.activeBackground",
    "tab.border",
    "tab.lastPinnedBorder",
    "terminal.border",
    "tree.indentGuidesStroke",
  ],
  [colors.secondary.acc]: [
    "breadcrumb.foreground",
    "button.secondaryHoverBackground",
  ],
  [colors.secondary.a33]: [
    "button.background",
    "debugToolBar.background",
    "debugView.stateLabelBackground",
    "diffEditor.diagonalFill",
    "editorWhitespace.foreground",
    "extensionBadge.remoteBackground",
    "extensionButton.prominentBackground",
    "listFilterWidget.background",
    "menu.selectionBackground",
    "merge.commonContentBackground",
    "minimapSlider.activeBackground",
    "minimapSlider.background",
    "minimapSlider.hoverBackground",
    "notebook.cellToolbarSeparator",
    "notebook.selectedCellBackground",
    "notebookScrollbarSlider.activeBackground",
    "notebookScrollbarSlider.hoverBackground",
    "notificationCenterHeader.background",
    "notifications.border",
    "panelSectionHeader.background",
    "peekViewEditor.matchHighlightBackground",
    "peekViewResult.matchHighlightBackground",
    "scrollbarSlider.activeBackground",
    "scrollbarSlider.background",
    "scrollbarSlider.hoverBackground",
    "statusBar.debuggingBackground",
    "statusBarItem.remoteBackground",
    "tree.tableColumnsBorder",
    "welcomePage.tileHoverBackground",
  ],
  [colors.secondary.a66]: [
    "button.hoverBackground",
    "extensionButton.prominentHoverBackground",
    "gitDecoration.ignoredResourceForeground",
    "input.placeholderForeground",
    "merge.commonHeaderBackground",
    "peekViewTitleDescription.foreground",
  ],
  [colors.secondary.a99]: [
    "button.secondaryBackground",
    "charts.lines",
    "debugTokenExpression.value",
    "descriptionForeground",
    "editorGroup.dropBackground",
    "editorHint.foreground",
    "editorIndentGuide.activeBackground1",
    "editorLineNumber.activeForeground",
    "panelSection.dropBackground",
    "sideBar.dropBackground",
  ],
  [colors.primary.base]: [
    "charts.blue",
    "charts.orange",
    "debugConsole.infoForeground",
    "debugIcon.breakpointStackframeForeground",
    "debugIcon.continueForeground",
    "debugIcon.pauseForeground",
    "debugIcon.restartForeground",
    "debugIcon.startForeground",
    "debugIcon.stepBackForeground",
    "debugIcon.stepIntoForeground",
    "debugIcon.stepOutForeground",
    "debugIcon.stepOverForeground",
    "debugTokenExpression.boolean",
    "debugTokenExpression.number",
    "debugTokenExpression.string",
    "debugView.valueChangedHighlight",
    "editor.findMatchBorder",
    "editorInfo.foreground",
    "editorLightBulbAutoFix.foreground",
    "editorLink.activeForeground",
    "editorMarkerNavigationInfo.background",
    "editorOverviewRuler.infoForeground",
    "editorSuggestWidget.highlightForeground",
    "gitDecoration.addedResourceForeground",
    "gitDecoration.modifiedResourceForeground",
    "gitDecoration.renamedResourceForeground",
    "gitDecoration.stageModifiedResourceForeground",
    "gitDecoration.submoduleResourceForeground",
    "gitDecoration.untrackedResourceForeground",
    "inputValidation.infoBorder",
    "list.highlightForeground",
    "notebookStatusSuccessIcon.foreground",
    "notificationLink.foreground",
    "notificationsInfoIcon.foreground",
    "pickerGroup.foreground",
    "problemsInfoIcon.foreground",
    "progressBar.background",
    "settings.modifiedItemIndicator",
    "symbolIcon.enumeratorMemberForeground",
    "symbolIcon.fieldForeground",
    "symbolIcon.interfaceForeground",
    "symbolIcon.variableForeground",
    "tab.activeModifiedBorder",
    "terminal.ansiBlue",
    "terminal.ansiBrightBlue",
    "terminal.ansiBrightCyan",
    "terminal.ansiCyan",
    "terminalCommandDecoration.successBackground",
    "testing.iconPassed",
    "testing.message.info.decorationForeground",
    "testing.runAction",
    "textLink.activeForeground",
    "textLink.foreground",
    "welcomePage.progress.foreground",
  ],
  [colors.green.base]: [
    "charts.green",
    "terminal.ansiBrightGreen",
    "terminal.ansiGreen",
  ],
  [colors.red.base]: [
    "charts.purple",
    "charts.red",
    "debugConsole.errorForeground",
    "debugExceptionWidget.background",
    "debugExceptionWidget.border",
    "debugIcon.breakpointForeground",
    "debugIcon.disconnectForeground",
    "debugIcon.stopForeground",
    "debugTokenExpression.error",
    "debugView.exceptionLabelBackground",
    "editorError.foreground",
    "editorMarkerNavigationError.background",
    "errorForeground",
    "gitDecoration.conflictingResourceForeground",
    "gitDecoration.deletedResourceForeground",
    "gitDecoration.stageDeletedResourceForeground",
    "inputValidation.errorBorder",
    "inputValidation.errorForeground",
    "list.errorForeground",
    "listFilterWidget.noMatchesOutline",
    "minimap.errorHighlight",
    "notebookStatusErrorIcon.foreground",
    "problemsErrorIcon.foreground",
    "statusBarItem.errorBackground",
    "symbolIcon.constructorForeground",
    "symbolIcon.functionForeground",
    "symbolIcon.methodForeground",
    "terminal.ansiBrightMagenta",
    "terminal.ansiBrightRed",
    "terminal.ansiMagenta",
    "terminal.ansiRed",
    "terminalCommandDecoration.errorBackground",
    "testing.iconErrored",
    "testing.iconFailed",
    "testing.message.error.decorationForeground",
    "testing.peekBorder",
  ],
  [colors.yellow.base]: [
    "charts.yellow",
    "debugConsole.warningForeground",
    "debugIcon.breakpointCurrentStackframeForeground",
    "editorLightBulb.foreground",
    "editorMarkerNavigationWarning.background",
    "editorOverviewRuler.warningForeground",
    "editorWarning.foreground",
    "inputValidation.warningBorder",
    "list.invalidItemForeground",
    "list.warningForeground",
    "minimap.warningHighlight",
    "notificationsWarningIcon.foreground",
    "problemsWarningIcon.foreground",
    "symbolIcon.classForeground",
    "symbolIcon.enumeratorForeground",
    "symbolIcon.eventForeground",
    "terminal.ansiBrightYellow",
    "terminal.ansiYellow",
    "testing.iconQueued",
  ],
  [colors.white.a05]: [
    "checkbox.border",
    "dropdown.border",
    "editor.rangeHighlightBackground",
    "editorHoverWidget.border",
    "editorRuler.foreground",
    "editorSuggestWidget.border",
    "input.background",
    "input.border",
    "notebook.symbolHighlightBackground",
    "quickInputTitle.background",
    "searchEditor.textInputBorder",
    "settings.checkboxBorder",
    "settings.dropdownBorder",
    "settings.dropdownListBorder",
    "settings.numberInputBackground",
    "settings.numberInputBorder",
    "settings.textInputBackground",
    "settings.textInputBorder",
    "statusBarItem.hoverBackground",
    "welcomePage.progress.background",
  ],
  [colors.secondary.a05]: [
    "diffEditor.insertedTextBackground",
    "peekViewEditor.background",
    "peekViewEditorGutter.background",
    "peekViewResult.background",
    "peekViewTitle.background",
    "quickInputList.focusBackground",
    "textBlockQuote.background",
  ],
  [colors.red.a33]: [
    "diffEditor.removedTextBackground",
    "editor.linkedEditingBackground",
    "editorGutter.deletedBackground",
    "testing.message.error.lineBackground",
  ],
  [colors.primary.a33]: [
    "editor.findMatchBackground",
    "editor.findMatchHighlightBackground",
    "editor.findRangeHighlightBackground",
    "editor.hoverHighlightBackground",
    "editor.inactiveSelectionBackground",
    "editor.lineHighlightBackground",
    "editor.selectionBackground",
    "editor.wordHighlightBackground",
    "editor.wordHighlightStrongBackground",
    "editorGutter.addedBackground",
    "editorGutter.modifiedBackground",
    "menubar.selectionBackground",
    "merge.currentContentBackground",
    "merge.incomingContentBackground",
    "peekViewResult.selectionBackground",
    "searchEditor.findMatchBackground",
    "tab.unfocusedActiveModifiedBorder",
    "tab.unfocusedInactiveModifiedBorder",
    "terminal.selectionBackground",
    "testing.message.info.lineBackground",
  ],
  [colors.green.a33]: ["editor.focusedStackFrameHighlightBackground"],
  [colors.primary.a05]: ["editor.foldBackground"],
  [colors.primary.a99]: [
    "editor.selectionHighlightBorder",
    "editor.snippetFinalTabstopHighlightBorder",
    "editorOverviewRuler.addedForeground",
    "editorOverviewRuler.currentContentForeground",
    "editorOverviewRuler.incomingContentForeground",
    "editorOverviewRuler.modifiedForeground",
    "editorOverviewRuler.rangeHighlightForeground",
    "merge.currentHeaderBackground",
    "merge.incomingHeaderBackground",
    "minimap.findMatchHighlight",
    "minimapGutter.addedBackground",
    "minimapGutter.modifiedBackground",
    "tab.inactiveModifiedBorder",
    "textBlockQuote.border",
  ],
  [colors.white.a33]: [
    "editor.snippetTabstopHighlightBackground",
    "editorBracketMatch.border",
    "editorOverviewRuler.findMatchForeground",
    "minimap.selectionHighlight",
    "notebook.cellStatusBarItemHoverBackground",
    "statusBarItem.activeBackground",
    "textSeparator.foreground",
  ],
  [colors.yellow.a33]: ["editor.stackFrameHighlightBackground"],
  [colors.primary.a66]: [
    "editor.symbolHighlightBackground",
    "list.filterMatchBackground",
  ],
  [colors.dark.base]: ["editorHoverWidget.statusBarBackground"],
  [colors.transparent.a05]: ["editorIndentGuide.background1"],
  [colors.red.a99]: [
    "editorOverviewRuler.deletedForeground",
    "editorOverviewRuler.errorForeground",
    "minimapGutter.deletedBackground",
    "notificationsErrorIcon.foreground",
  ],
  [colors.primary.acc]: ["editorOverviewRuler.wordHighlightStrongForeground"],
  [colors.dark.a33]: [
    "editorSuggestWidget.selectedBackground",
    "notebookScrollbarSlider.background",
    "peekView.border",
    "statusBarItem.prominentHoverBackground",
    "textCodeBlock.background",
    "widget.shadow",
  ],
  [colors.dark.a99]: [
    "editorUnnecessaryCode.opacity",
    "statusBarItem.prominentBackground",
  ],
  [colors.yellow.a99]: ["extensionIcon.starForeground"],
};

module.exports = {
  settingsByColor,
  scopesByColor,
};
