import { generateFinalContent } from '../generateFinalContent';

describe('generateFinalContent', () => {
  it('should generate the final content correctly', () => {
    const title = 'MySnippet';
    const name = 'mySnippet';
    const body = 'import * as vscode from \'vscode\';';

    const expected = `{
  "MySnippet": {
    "scope": "html, javascript, typescript, javascriptreact, typescriptreact",
    "prefix": "mySnippet",
    "body": [
      "import * as vscode from \'vscode\';",
    ]
  }
}`;

    const result = generateFinalContent(title, name, body);

    expect(result).toEqual(expected);
  });
});
