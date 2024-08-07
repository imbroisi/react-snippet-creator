export function toPascalCase(input: string): string {
  return input
    .split(/[\s-_]+/) // Split by spaces, hyphens, or underscores
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter
    .join(''); // Join without spaces
}
