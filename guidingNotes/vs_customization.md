- **keyborad এর প্রতিটা click screen এ দেখাতে** : command pallet থেকে **_Toogle Screen Cast mode_** এ click করতে হবে

- **settings.json file change** [v1]: **_settings.json_** file এ গিয়ে নিচের code টাকে use করতে হবে,

  ```http
  // // default setting setup [mine]
  // {
  //     "emmet.triggerExpansionOnTab": true,
  //     "workbench.iconTheme": "vscode-icons",
  //     "[html]": {
  //         "editor.defaultFormatter": "vscode.html-language-features"
  //     },
  //     "[javascript]": {
  //         "editor.defaultFormatter": "vscode.typescript-language-features"
  //     },
  //     "editor.mouseWheelZoom": true,
  //     "screencastMode.fontSize": 40,
  //     "git.autofetch": true,
  //     "editor.wordWrap": "on",
  //     "liveServer.settings.donotVerifyTags": true,
  //     "tailwindCSS.emmetCompletions": true,
  //     "editor.inlineSuggest.enabled": true,
  //     "files.autoSave": "onFocusChange",
  //     "emmet.includeLanguages": {
  //         "javascript": "javascriptreact"
  //     },
  //     "javascript.updateImportsOnFileMove.enabled": "always"
  // }
  ```

```http
// // combo setting setup [mine+sumit vai]
{
"emmet.triggerExpansionOnTab": true,
"[html]": {
"editor.defaultFormatter": "vscode.html-language-features"
},
"editor.mouseWheelZoom": true,
"screencastMode.fontSize": 40,
"git.autofetch": true,
"liveServer.settings.donotVerifyTags": true,
"tailwindCSS.emmetCompletions": true,
"editor.inlineSuggest.enabled": true,
"files.autoSave": "onFocusChange",
"emmet.includeLanguages": {
"javascript": "javascriptreact"
},
"javascript.updateImportsOnFileMove.enabled": "always",

// learn with sumit settings setup
// editor
"editor.fontSize": 20,
"editor.fontFamily": "Fira Code, Operator Mono",
"editor.fontLigatures": true,
"editor.wordWrap": "on",
"editor.minimap.enabled": true,
"editor.tokenColorCustomizations": {
"textMateRules": [
{
"scope": "comment",
"settings": {
"fontStyle": "italic"
}
}
]
},
// cursor
"editor.cursorSmoothCaretAnimation": true,
"editor.cursorBlinking": "expand",
// config related to code formatting
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"[javascript]": {
"editor.formatOnSave": false,
"editor.defaultFormatter": null
},
"[javascriptreact]": {
"editor.formatOnSave": false,
"editor.defaultFormatter": null
},
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true,
"source.fixAll.tslint": true,
"source.organizeImports": true
},
"eslint.alwaysShowStatus": true,
//terminal
"terminal.integrated.fontSize": 16,
"terminal.integrated.fontWeight": "normal",
"terminal.integrated.fontFamily": "monospace,Fira Code, Operator Mono",
"workbench.iconTheme": "vscode-icons",
// terminal customization
"workbench.colorCustomizations": {
"terminal.background": "#1D2021",
"terminal.foreground": "#A89984",
"terminalCursor.background": "#A89984",
"terminalCursor.foreground": "#A89984",
"terminal.ansiBlack": "#1D2021",
"terminal.ansiBlue": "#0D6678",
"terminal.ansiBrightBlack": "#665C54",
"terminal.ansiBrightBlue": "#0D6678",
"terminal.ansiBrightCyan": "#8BA59B",
"terminal.ansiBrightGreen": "#95C085",
"terminal.ansiBrightMagenta": "#8F4673",
"terminal.ansiBrightRed": "#FB543F",
"terminal.ansiBrightWhite": "#FDF4C1",
"terminal.ansiBrightYellow": "#FAC03B",
"terminal.ansiCyan": "#8BA59B",
"terminal.ansiGreen": "#95C085",
"terminal.ansiMagenta": "#8F4673",
"terminal.ansiRed": "#FB543F",
"terminal.ansiWhite": "#A89984",
"terminal.ansiYellow": "#FAC03B"
}
}
```

- **theme install** :

  2. **frontend**: **_Dracula Official_** by Dracula Theme **_Dracula soft_**
  1. **backend**: **_Andromeda_** by Eliver Lara **_Andromeda Colorizer_**
  1. **bothend**: **_Community Material Theme_** by Mattia Astorino **_Community Material Theme High Contrst_**

- **plugins install**:
  1. **_vscode-icons_** by **_VSCode Icons Team_**
  2. **_Live Server_** by **_Ritwick Dey_**
  3. **_Auto Rename Tag_** by **_Jun Han_**
  4. **_Path Autocomplete_** by **_Mihai Vilcu_**
  5. **_Turbo Console Log_** by **_ChakrounAnas_**
  6. **_Prettier - Code formatter_** by **_Prettier_**
  7. **_ESLint_** by **_Microsoft_**
  8. **_ES7+ React/Redux/React-Native snippets_** by **_dsznajder_**
  9. **_Emoji Snippets_** by **_Devzstudio_**

* **keyboard shortcut**:

1. **_Ctrl+Shift+P_** : open commant pallet
1. **_Ctrl+P_** : search any file of project
1. **_Ctrl+Shift+L_** : select all similar word
1. **_Ctrl+D_** : select next similar word
1. **_Ctrl+H_** : find and replace

```

```
