// Задание 3

function f1(x, callback) {
    setTimeout(() => {
        const result = x * x;
        console.log(`f1 дает значение ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f2(x, callback) {
    setTimeout(() => {
        const result = 2 * x;
        console.log(`f2 дает значение ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f3(x, callback) {
    setTimeout(() => {
        const result = -2;
        console.log(`f3 дает значение ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function F(x) {
    f1(x, (result1) => {
        console.log(`промежуточный итог ${result1}`);
        f2(x, (result2) => {
            console.log(`промежуточный итог ${result1 + result2}`);
            f3(x, (result3) => {
                const sum = result1 + result2 + result3;
                console.log(`промежуточный итог ${sum}`);
                console.log(`Результат выполнения функции F: ${sum}`);
            });
        });
    });
}

F(2);
// F(4);
// F(6);
