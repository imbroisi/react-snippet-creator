import * as vscode from 'vscode';
import { SNIPPET_FOLDER } from '../data/snippetFolder';

export async function openFileInEditor(fileName: string) {
  const fileUri = vscode.Uri.file(`${SNIPPET_FOLDER}${fileName}`);

  try {
    const document = await vscode.workspace.openTextDocument(fileUri);
    await vscode.window.showTextDocument(document);
  } catch (error) {
    vscode.window.showErrorMessage(`Failed to open file: ${(error as Error).message}`);
  }
}