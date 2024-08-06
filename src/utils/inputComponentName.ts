import * as vscode from 'vscode';
import { checkSnippetNameError } from './validateComponentName';

export default async function inputComponentName(uri: vscode.Uri) {
  let inputName = await vscode.window.showInputBox({
    placeHolder: 'Enter the Component name',
  });

  if (!inputName) {
    return { error: 'No file name entered' };
  }

  const fullName = `${inputName}.code-snippets`;

  // const FolderPath = `${uri.fsPath}/${inputName}`;
  // const isPathExist = await vscode.workspace.fs.stat(vscode.Uri.file(FolderPath)).then(() => true, () => false);
  // if (isPathExist) {
  //   return { error: 'Directory already exists' };
  // }

  const error = await checkSnippetNameError(inputName, fullName);
  if (error) {
    return { error };
  };


  return { name: fullName };
};
