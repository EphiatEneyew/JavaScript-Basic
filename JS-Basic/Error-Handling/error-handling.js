// Example 1: Handling a SyntaxError
try {
    // Attempting to parse invalid JSON
    JSON.parse("{'name': 'John', 'age': 30}");
} catch (error) {
    console.error("SyntaxError:", error.message);
}

// Example 2: Handling a TypeError
try {
    // Attempting to call a method on an undefined variable
    const undefinedVariable = undefined;
    undefinedVariable.method();
} catch (error) {
    console.error("TypeError:", error.message);
}

// Example 3: Handling a ReferenceError
try {
    // Attempting to access an undefined variable
    console.log(undefinedVariable);
} catch (error) {
    console.error("ReferenceError:", error.message);
}

// Example 4: Handling a RangeError
try {
    // Attempting to manipulate an array index out of range
    const array = [1, 2, 3];
    array[5] = 6;
} catch (error) {
    console.error("RangeError:", error.message);
}

// Example 5: Handling a Custom Error
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    // Throwing a custom error
    throw new CustomError("This is a custom error message.");
} catch (error) {
    console.error(error.name + ":", error.message);
}
