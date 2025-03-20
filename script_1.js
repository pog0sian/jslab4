// Асинхронность
// Задание 1

function ask_password(login, password, success, failure) {
    const vowels = 'aeiouy';
    login = login.toLowerCase();
    password = password.toLowerCase();

    let vowelsCount = 0;
    for (let char of password) {
        if (vowels.includes(char)) {
            vowelsCount++;
        }
    }

    let loginConsonants = '';
    for (let char of login) {
        if (!vowels.includes(char)) {
            loginConsonants += char;
        }
    }

    let passwordConsonants = '';
    for (let char of password) {
        if (!vowels.includes(char)) {
            passwordConsonants += char;
        }
    }

    const isVowelValid = (vowelsCount === 3);
    const isConsonantsValid = (loginConsonants === passwordConsonants);

    if (isVowelValid && isConsonantsValid) {
        success();
    } else {
        let errorMsg = '';
        if (!isVowelValid && !isConsonantsValid) {
            errorMsg = 'Everything is wrong';
        } else if (!isVowelValid) {
            errorMsg = 'Wrong number of vowels';
        } else {
            errorMsg = 'Wrong consonants';
        }
        failure(login, errorMsg)
    }
}

function main(login, password) {
    ask_password(
        login,
        password,
        () => console.log(`Привет, ${login}!`),
        (login, errorMsg) => console.log(`Кто-то пытался притвориться пользователем ${login}, но в пароле допустил ошибку ${errorMsg.toUpperCase()}`)
    );
}

main('login', 'aaalgn');
main('login', 'aaalg1n');