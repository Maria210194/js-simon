console.log('OK JS!!!!!')

let max = 10;

const container = document.getElementById('auguri');
container.innerText = max;

const clock = setInterval(myFunctionInterval, 1000);    // verrà eseguito ogni secondo (1000ms)
console.log('identificatore del setInterval', clock);   // posso usarla per cancellare il setInterval



function myFunctionInterval() {
    console.log('sono in myFunctionInterval e sono eseguito ogni tot a meno che non mi cancelli');
    max--;
    container.innerText = max;
    console.log(max);
    if (max <= 0) {
        clearInterval(clock); // cancello il setInterval e fermo tutto
        makeWishes();         // faccio apparire la scritta di buon anno
    }

}

function makeWishes() {
    container.innerText = 'Buon Anno!';
}