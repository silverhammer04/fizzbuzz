// **FOR**
const fizz = input => input % 3 === 0
const buzz = input => input % 5 === 0
for (let count = 1; count <= 100; count++) {
    if(fizz(count) && buzz(count) ) 
        console.log('FizzBuzz');     
    else if(buzz(count)) console.log('Buzz');     
    else if(fizz(count)) console.log('Fizz');
        else console.log(count); 
}

// **WHILE**
let wile = 1;
while (wile < 100) {
    if (wile % 5 === 0 && wile % 3 === 0) console.log('FizzBuzz')
    else if( wile % 3 === 0) console.log('Fizz')
    else if( wile % 5 === 0) console.log('Buzz')
    else console.log(wile)
    wile++;
    }

// **DO WHILE**
let dw = 0
do { dw++;
    if(dw % 5 === 0 && dw % 3 === 0) console.log('FizzBuzz');
    else if(dw % 3 === 0) console.log('Fizz')
    else if(dw % 5 === 0) console.log('Buzz')
    else console.log(dw);
} while (dw < 100);