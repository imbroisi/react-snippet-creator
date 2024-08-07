import * as vscode from 'vscode';
import { checkSnippetNameError } from './validateComponentName';

export default async function inputComponentName(uri: vscode.Uri) {
  let inputName = await vscode.window.showInputBox({
    placeHolder: 'Enter the Component name',
  });

  if (!inputName) {
    return { error: 'No file name entered' };
  }

  const fileName = `${inputName}.code-snippets`;

  const error = await checkSnippetNameError(inputName, fileName);
  if (error) {
    return { error };
  };

  return { inputName, fileName };
};
