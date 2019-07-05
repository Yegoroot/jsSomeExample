/*** Знакомство с библиотекой */
	/** Работа с числами */
		/* двоичное представление */
		/* восьмеричное предстваление */
		/* Метод Number.isInteger(number) */
		/* Метод Number.isNaN(value) */
		/* Метод Number.isFinite(number) */
		/* метод Number.isSafeInteger(number) */
		/* Свойство Number.EPSILON */


	/** Объект Math */
		/* Тригонометрические операции */
		/* Алгебраические операции */
		/* Прочие методы */


	/** Работа со строками */
		/* Управляющая последовательность для больших кодовых пунктов */
		/* Метод codePoint(index) */
		/* Метод String.fromCodePoint(number1, ..., number2) */

		/* Метод repeat(count) */
		{
			console.log("a".repeat(6)); // "aaaaaa"
		}

		/* Метод includes(string, index) */
		{	// содержит ли строка подстроку
			let str = "Hi, I am a JS Developer";
			console.log(str.includes("JS")); // true
			console.log(str.includes("JS", 13)); // false	// начиная с позиции
		}
		/* Метод startsWith(string, index) */
		{	// начинается ли строка с заданной строки
			let str = "Hi, I am a JS Developer";
			console.log(str.startsWith('Hi, I am')); // true
			console.log(str.startsWith('JS Developer', 11)); // true
		}
		/* Метод endWith(string, index) */
			// аналогичен методу startsWidth , только проверяет на заканчивается ли строка
			//
		/* Нормализация NFC, NFD, NFKC, NFKD */


		/* ШАБЛОННЫЕ СТРОКИ */
		{
			let nameBill = "Bill";
			console.log(`Hello ${nameBill}`);

			/* многострочность */
				function createEmail(to, from, subject, message){
				console.log(`
				To: ${to}
				From: ${from}
				Subject: ${subject}
				Message: ${message}
						`);
				}createEmail("mail@mail.ru", "your@gmail.com", "Hello", "hou are you doing")

			/* выражение в шаблонезаторе */
				function add(x, y){
					console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
				}
				add("12", 24);

			/* тэгирование */
				let name = "Bill";
				console.log(upperName`Hello ${name}`);
				function upperName(literals, value){ /* первый аргумент массив строковых литералов, второй аргумент значения вычесленных выражений */
					return literals[0] + value.toUpperCase();
				}
				// v2
				let a = 2;
				let b = 20;
				let c = "JavaScript";
				// strings - массив строковых литералов
				// values - массив результатов вычислений
				let tag = (strings, ...values) => {
					let result = "";
					for (let i = 0; i<strings.length; i++)
					{
						result += strings[i];
						if(i<values.length){
							result += values[i];
						}
						console.log (...values); //  22 "JavaScript" сдесь мы выводим массив результатов вычислений
					}	return result;
				};

				let str = tag `My age is ${a+b} and I love ${c}`;
				console.log(str);

			/* Неформативные строки */
				let s = String.raw `xy\n${1 + 1}z`;
				console.log(s);

		}
