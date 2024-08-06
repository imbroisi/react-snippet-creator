import * as vscode from 'vscode';

export function getContentUnderCursor() {

  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const document = editor.document;
    const content = document.getText();

    return content;
    // Now you can use the 'content' variable which contains the entire text of the current editor
  }
  return '';
}
