function isPalindrome(str) {
    let cleanedStr = "";
    for (let char of str) {
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= 0 && char <= 9) && char != " ") {
            cleanedStr += char.toLowerCase()
        }
    }

    let reversedString = cleanedStr.split("").reverse().join("")

    return cleanedStr === reversedString
}