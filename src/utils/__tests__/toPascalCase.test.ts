import { toPascalCase } from '../toPascalCase';

describe('toPascalCase', () => {
  it('should convert a string to pascal case', () => {
    const input = 'hello world';
    const expected = 'HelloWorld';

    const result = toPascalCase(input);
    expect(result).toBe(expected);
  });

  it('should handle hyphens and underscores', () => {
    const input = 'hello-world_snake_case';
    const expected = 'HelloWorldSnakeCase';

    const result = toPascalCase(input);
    expect(result).toBe(expected);
  });

  it('should handle leading and trailing spaces', () => {
    const input = '  leading and trailing spaces  ';
    const expected = 'LeadingAndTrailingSpaces';

    const result = toPascalCase(input);
    expect(result).toBe(expected);
  });

  it('should handle empty input', () => {
    const input = '';
    const expected = '';

    const result = toPascalCase(input);
    expect(result).toBe(expected);
  });
});