function getLetterOcurrances(input){
    filtered = input[0].split('').filter(filterLetter => filterLetter === input[1]);
    
    return filtered.length;
}


inputStrings = ['panther', 'n'];
console.log(getLetterOcurrances(inputStrings));