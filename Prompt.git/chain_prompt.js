/**
 * Converts a string to kebab-case.
 * Handles camelCase, PascalCase, spaces, underscores, hyphens, and trims/cleans input.
 * @param {any} input - The value to convert.
 * @returns {string} - The kebab-case version of the input.
 * @throws {TypeError} - If input cannot be converted to string.
 */
function toKebabCase(input) {
    // Attempt to convert input to string, throw if not possible
    if (input === null || input === undefined) {
        throw new TypeError('Input cannot be null or undefined');
    }
    let str;
    try {
        str = String(input);
    } catch {
        throw new TypeError('Input cannot be converted to string');
    }

    // Trim whitespace from both ends
    str = str.trim();

    // Remove leading/trailing non-alphabetic characters
    str = str.replace(/^[^a-zA-Z]+|[^a-zA-Z]+$/g, '');

    // Replace underscores, hyphens, and spaces with a single space
    str = str.replace(/[_\-\s]+/g, ' ');

    // Insert space before any uppercase letter that follows a lowercase letter or another uppercase letter (for camelCase/PascalCase)
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    str = str.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');

    // Split by spaces, filter out empty, join with hyphens
    const words = str.split(/\s+/).filter(Boolean);

    // Lowercase and join with hyphens
    return words.map(w => w.toLowerCase()).join('-');
}

// Example usage:
// console.log(toKebabCase('HelloWorld')); // "hello-world"
// console.log(toKebabCase('hello_world')); // "hello-world"
// console.log(toKebabCase('  --Hello World__')); // "hello-world"
// console.log(toKebabCase(12345)); // "12345"