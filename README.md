# VSCode Extension: Create Snippet Wizard
<center>
  <img src="https://raw.githubusercontent.com/imbroisi/snippet-wizard/main/images/logo.png">
</center>

## Description
This Visual Studio Code extension helps you create a personal snippet quickly and efficiently based on an existing JS/TS file. It provides context menu commands to generate the file for a new snippet, ensuring consistency and saving development time.

## Features
- Create a new snippet with a quick operation - right-click on the editor with the content that will form the basis of the snippet, choose a name and you're done. 
- The created snippet will be saved in the VSCode's User folder.

## How to Use
Suppose you want to create a snippet based on this existing content:

```tsx
export interface LetsRockProps {

}

export default function LetsRock(props: LetsRockProps) {
  return (
    <div className="flex items-center justify-center">
      <h1>Hello</h1>
    </div>
  );
}
```

1. Right-click in the content above in the editor.
2. The context menu will be open.
3. Select `Create Snippet From This File`.
3. This will open the VSCode `Command Palette` at the top of the VSCode editor.
4. There, give your snippet a name and press `Enter`.
5. Your snippet has been created and saved.
6. The content of the created snippet now will be opened in the editor.

If you try to create a snippet with the same name as another, you will be asked to confirm whether it should be overwritten or not.

This is the snippet created, assuming you choose the name `my-snippet`:


```json
{  
  "MySnippet": {
    "scope": "html, javascript, typescript, javascriptreact, typescriptreact",
    "prefix": "my-snippet.code-snippets",
    "body": [
      "export interface LetsRockProps {",
      "",
      "}",
      "",
      "export default function LetsRock(props: LetsRockProps) {",
      "  return (",
      "    <div className=\"flex items-center justify-center\">",
      "      <h1>Hello</h1>",
      "    </div>",
      "  );",
      "}",
      ""
    ]
  }
}

```
## Where is the snippet file saved?
The snippet is saved in the User's snippets folder of VSCode, and is OS dependent.

|   SO        | Location                                         |
|-------------|--------------------------------------------------|
| ` macOS `   | ~/Library/Application Support/Code/User/snippets |
| ` linux `   | ~/.config/Code/User/snippets                     | 
| ` windows ` | %APPDATA%\\Code\\User\\snippets\\                |

## Installation
1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
3. Search for `Create Snippet Wizard`.
4. Click `Install` to install the Extension.
5. Reload Visual Studio Code to activate the Extension.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Please read the [CONTRIBUTING](CONTRIBUTING.md) file for details on how to contribute to this project.

## Author
Luiz Imbroisi - Ender
- Email: ender.imbroisi@gmail.com

## Acknowledgments
- Thanks to the open-source community for their valuable contributions.
