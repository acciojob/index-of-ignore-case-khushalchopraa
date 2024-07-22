
function indexOfIgnoreCase(str, subStr) {
    // Convert both strings to lowercase to ensure case-insensitive comparison
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    // Use the indexOf method to find the first occurrence of lowerSubStr in lowerStr
    return lowerStr.indexOf(lowerSubStr);
}

// Examples
console.log(indexOfIgnoreCase("Hello World", "world")); // 
console.log(indexOfIgnoreCase("apple", "Ple")); //
console.log(indexOfIgnoreCase("test", "aaa")); // 
