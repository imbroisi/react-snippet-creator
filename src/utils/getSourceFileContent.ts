import * as vscode from 'vscode';

export function getSourceFileContent() {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const document = editor.document;
    const content = document.getText();

    return content;
  }
  return '';
}
