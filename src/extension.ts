import * as vscode from 'vscode';
import inputComponentName from './utils/inputComponentName';
import { getSourceFileContent } from './utils/getSourceFileContent';
import { generateFinalContent } from './utils/generateFinalContent';
import { writeContentToFile } from './utils/writeContentToFile';
import { openFileInEditor } from './utils/openFileInEditor';
import { toPascalCase } from './utils/toPascalCase';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.createReactSnippet', async (uri: vscode.Uri) => {
    const { inputName, fileName, error } = await inputComponentName(uri);
    if (error || !fileName) {
      vscode.window.showErrorMessage(error || 'No file name entered');
      return;
    }

    const body = getSourceFileContent();
    if (!body) {
      vscode.window.showErrorMessage('No content');
      return;
    }
    const snippetName = toPascalCase(inputName);
    const snippetPrefix = fileName;

    const finalContent = generateFinalContent(snippetName, snippetPrefix, body);
    await writeContentToFile(fileName, finalContent);
    await openFileInEditor(fileName);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() { }
