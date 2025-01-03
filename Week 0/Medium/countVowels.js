function countVowels(str) {
    // Your code here
    let counter = 0
    for(let char of str){
      if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
        counter++
      }
    }
    return counter
}