const isOddEven = (num) => {
    //alternative to switch
    num % 2 == 0 ? 
        console.log('Even') : num % 2 == 1 ? 
            console.log('Odd') : console.log('Invalid');
    
}
isOddEven(5);
isOddEven(8);
isOddEven(1.5);