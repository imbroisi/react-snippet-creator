/**
 * Rules:
 * - The first character must be an uppercase letter.
 * - The subsequent characters can be:
 *      uppercase letters
 *      lowercase letters 
 *      numbers
 *      underscores
 *      dollar signs
 */

import * as vscode from 'vscode';
import { SNIPPET_FOLDER } from "../data/snippetPaths";

export const checkSnippetNameError = async (inputName: string, fullName: string) => {
  const snippetFilePath = vscode.Uri.file(`${SNIPPET_FOLDER}${fullName}`);
  const fileExists = await vscode.workspace.fs.stat(snippetFilePath).then(() => true, () => false);

  // vscode.window.showInformationMessage('fileExists: ' + fileExists);

  if (fileExists) {
    const selectdOption = await vscode.window.showQuickPick(['No', 'Yes'], {
      placeHolder: 'Name already exists. Do you want to overwrite?',
    });
    if (selectdOption === 'No') {
      return 'File already exists';
    }
  }

  vscode.window.showInformationMessage('fileExists: ' + fileExists);


  // Regular expression to validate file names across macOS, Linux, and Windows
  const inputNameRegex = /^[^<>:"/\\|?*\x00-\x1F]+$/;
  const isValid = inputNameRegex.test(inputName);

  if (!isValid) {
    return 'Invalid Component name';
  }

  return false;
};
