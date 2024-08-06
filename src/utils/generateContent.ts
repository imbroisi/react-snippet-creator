const SNIPPET_PATTERN =
`{  
  "{{TITLE}}": {
    "scope": "html, javascript, typescript, javascriptreact, typescriptreact",
    "prefix": "{{NAME}}",
    "body": [
      {{BODY}}
    ]
  }
}
`

export const generateContent = (title: string, name: string, body: string) => {
  const bodyFormated = body
    .replace(/"/g, '\\"')
    .split('\n').map((line, index) => {
      return index === 0 ? `"${line}",` : `      "${line}",`
    }).join('\n');

  return SNIPPET_PATTERN
    .replace(/{{TITLE}}/g, title)
    .replace(/{{NAME}}/g, name)
    .replace(/{{BODY}}/g, bodyFormated)
}
