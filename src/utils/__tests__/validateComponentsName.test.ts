import * as vscode from 'vscode';
import { checkSnippetNameError } from '../../utils/validateComponentName';

describe('checkSnippetNameError', () => {
  it('should return "File already exists" if the file already exists', async () => {
    // Mocking vscode.workspace.fs.stat to return true
    jest.spyOn(vscode.workspace.fs, 'stat').mockResolvedValueOnce({} as vscode.FileStat);

    // Mocking vscode.window.showQuickPick to return 'No'
    jest.spyOn(vscode.window, 'showQuickPick').mockResolvedValueOnce({ label: 'No' });

    const inputName = 'mySnippet';
    const fullName = 'mySnippet.json';

    const result = await checkSnippetNameError(inputName, fullName);

    expect(result).toBe('File already exists');
  });

  it('should return "Invalid Component name" if the input name is invalid', async () => {
    const inputName = 'mySnippet<';
    const fullName = 'mySnippet.json';

    const result = await checkSnippetNameError(inputName, fullName);

    expect(result).toBe('Invalid Component name');
  });

  it('should return false if the file does not exist and the input name is valid', async () => {
    // Mocking vscode.workspace.fs.stat to return false
    jest.spyOn(vscode.workspace.fs, 'stat').mockRejectedValueOnce(false);

    const inputName = 'mySnippet';
    const fullName = 'mySnippet.json';

    const result = await checkSnippetNameError(inputName, fullName);

    expect(result).toBe(false);
  });
});
