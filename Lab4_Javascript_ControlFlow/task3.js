const isLeap = (year) => ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)? console.log('Yes') : console.log('No');
    
isLeap(1999);
isLeap(2000);
isLeap(1900);