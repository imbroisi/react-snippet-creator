import * as vscode from 'vscode';
import inputComponentName from './utils/inputComponentName';
import { getContentUnderCursor } from './utils/getContentUnderCursor';
import { generateContent } from './utils/generateContent';
import { SNIPPET_FOLDER } from './data/snippetPaths';
// import createAllFiles from './components/main';
// import inputComponentName from './extensionFiles/inputComponentName';
// import { appData } from './data/appData';
// import getUserInputSelections from './extensionFiles/getUserInputSelections';

// export interface OptionsSelected {
//   [key: string]: string
// }

// function getPreviousSelections(context: vscode.ExtensionContext) {
//   let previousSelections: any = context.globalState.get<Record<string, OptionsSelected>>('optionsSelected');
//   if (!previousSelections) {
//     previousSelections = {};
//     appData.forEach((data) => {
//       previousSelections[data.id] = data.options[0];
//     });
//   }
//   return previousSelections;
// }

// export async function activate(context: vscode.ExtensionContext) {
//   vscode.commands.registerCommand('extension.createReactSnippet', async (uri: vscode.Uri) => {
//     const { name, error } = await inputComponentName(uri);
//     if (error) {
//       vscode.window.showErrorMessage(error);
//       return;
//     }
//     const optionsSelected = await getUserInputSelections('create', getPreviousSelections(context));
//     createAllFiles(uri, name || '', optionsSelected);
//   });
// }

const saveToFile = async (fileName: string, content: string) => {
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
}

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.createReactSnippet', async (uri: vscode.Uri) => {
    const { name, error } = await inputComponentName(uri);
    if (error || !name) {
      vscode.window.showErrorMessage(error || 'No file name entered');
      return;
    }

    const title = 'React Snippet';
    const body = getContentUnderCursor();
    const finalContent = generateContent(title, name, body);
    saveToFile(name, finalContent);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() { }
