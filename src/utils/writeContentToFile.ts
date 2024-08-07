import * as vscode from 'vscode';
import { SNIPPET_FOLDER } from '../data/snippetFolder';

export const writeContentToFile = async (fileName: string, content: string) => {
  const fileUri = vscode.Uri.file(`${SNIPPET_FOLDER}${fileName}`);
  const workspaceEdit = new vscode.WorkspaceEdit();
  workspaceEdit.createFile(fileUri, { overwrite: true });
  await vscode.workspace.applyEdit(workspaceEdit);

  const document = await vscode.workspace.openTextDocument(fileUri);
  const edit = new vscode.WorkspaceEdit();
  edit.insert(fileUri, new vscode.Position(0, 0), content);
  await vscode.workspace.applyEdit(edit);
  await document.save();

  vscode.window.showInformationMessage('Snippet created');
};
