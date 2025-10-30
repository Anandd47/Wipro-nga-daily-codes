// This is a TypeScript file that prints "Hello, World!" to the console with the help of a function
function greet(name: string): string {
    return `Hello, ${name}!`;
}

const message: string = greet("World");
console.log(message);

// Every declaration has its type defined explicitly,
// i.e. function parameter 'name' is of type string and the return type of the function is also string
