/** МАССИВЫ */
{
	{
	 // Method Array.from(iterable, mapFunc, this)
	 let str = "0123";
	 let obj = {number: 1};
	 // три параметра
	 // 1) ссылка на итерируемый объект
	 // 2) необяз. ссылка на функцию обратного вызова ( ФУНКЦИЯ ОТОБРАЖЕНИЯ)
	 // 3) необяз. значение ключевого слова this внутри функции отображения
	 let arr = Array.from(str, function(value) {
	   return parseInt(value) + this.number;
	 }, obj);
	 console.log(arr);
	}
  {
    // метод Array.of(values...)
    // создает массив так же как и конструктор объекта Array
    // однако, если в конструкторе указать одно число, то длина
    // массива страновится этим числом, Array.of решает эту проблему

    //let arr1 = new Array(2);
    //let arr2 = new Array.of(2);
    // console.log(arr1[0], arr1.length);
    // console.log(arr2[0], arr2.length);

    // не работает этот метод (странно)
    }
    {
      // Method fill (value, startIndex, endIndex)
      /**
       * Метод заменят элементы от startIndex, to endIndex
       */
       let arr1 = [1,2,3,4]; arr1.fill(5); // all
       console.log(arr1); // [5,5,5,5]

       let arr2 = [1,2,3,4]; arr2.fill(5,1,2);
       console.log(arr2); // [1,5,3,4]

       let arr3 = [1,2,3,4]; arr3.fill(5,1,3);
       console.log(arr3); // [1,5,5,4]

       let arr4 = [1,2,3,4]; arr4.fill(5,-3,2);
       console.log(arr4); // [1,5,3,4]

       let arr5 = [1,2,3,4]; arr5.fill(5, 0, -2);
       console.log(arr5);  // [5,5,3,4]
    }
    {
      // Метод find(testingFunc, this)
      // Принимает 2 аргумента первый функция проверки второй значение - this
      // Функция имеет 3 параметра
      //  _value - значение
      //  _index - индекс
      //  _array - массив
      //
      //  Функция возвращает true если удовлетворяет условию поиска
      var x = 12;
      var arr = [11, 12, 13];
      var result = arr.find(function(value, index, array) {
        if (value == this)
        {
          return true;
        }
      }, x)
      console.log(result); // выведет 12
    }
    {
      // метод findIndex(testingFunc, this)
      // Работает так же как и предыдущий метод только этот метод возвращает индекс
    }
    {
      // метод copyWidth(targetIndex, strtIndex, endIndex)
      // Метод copyWidth() объекта Array копирует последовательность значений массива в другое место в этом же массиве.
    let arr1 = [1, 2, 3, 4, 5]; arr1.copyWithin(1, 2, 4);
			console.log(arr1); // [1,3,4,4,5]
		let arr2 = [1, 2, 3, 4, 5]; arr2.copyWithin(0, 1);
			console.log(arr2); // [2,3,4,5,5]
		let arr3 = [1, 2, 3, 4, 5]; arr3.copyWithin(1, -2);
		 	console.log(arr3); // [1,4,5,4,5]
		let arr4 = [1, 2, 3, 4, 5]; arr4.copyWithin(1, -2, -1);
			console.log(arr4); // [1,4,3,4,5]
    }
		{
			// методы ebtries(), keys(), values()
			// выводит итерируемый объект индекс значение
			// выводит итерируемый объект индексы
			// выводит итерируемый объект значения
			let arr2 = ['a', 'b', 'c'];
			let entries = arr2.entries();
			let keys = arr2.keys();
			// let values = arr2.values();
			console.log(...entries);
			console.log(...keys);
		//	console.log(...values);  СтРАННО ! не работает

		}



}
