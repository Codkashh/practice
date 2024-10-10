function *printNumber(){
    console.log('First');
    yield 1;
    console.log('second');
    yield 2;
    console.log('third');
    yield 3;
}

const gen = printNumber();

console.log(gen.next().value);

console.log(gen.next());