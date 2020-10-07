exports.throwError = (code, errorMessage) => err => {
    const error = new Error(errorMessage || "It's busted.");
    error.code = code;
    if (err.errors) {
        error.message = err.errors.map(e => e.message).join('\n');
        // "'content is required', content text to long, etc. "
        // from the model
    }
    throw error;
}

