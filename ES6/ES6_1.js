

/* ДИСТРУКТИВНОЕ ПРИСВАИВАНИЕ */

	/* диструктивное присваивание массивов ( переменным ) */
	{
		let myArr = [1,2,3, 4,5,6];
		let [a, , c, d = 12, ...arr] = myArr;
		//console.log(arr[0]); // 5
	}
	/* диструктивное присваивание объектов */
	{
		/* имена переменных совпадают с именами свойств объекта */
		{
			let object = { "name": "John", "age": "20" }
			let name, age;
			({name, age} = object);
			//console.log(name); // john
		}
		/* имена переменных не совпадают с именами свойств */
		{
			let object = { "name": "John", "age": "20" }
			let x, y, z;
			({name: x, age: y, z = 12} = object);
			//console.log(x, z);  // john 12
 		}
 		/* вычислять имя свойств в деструктивном присваивании 
 		   и диструктивное присваивание вложенных объектов
 		   смотри в книге глава - диструктивное присваивание */
	}
/*
 |
 |
 */
/* СТРЕЛОЧНЫЕ ФУНУЦИИ */
	
	// this window
	{
		let circleArea = (pi, r) => {
			let area = pi * r * r;
			return area;
		} 
		//console.log(circleArea(12, 12));
	}
	
/*
 |
 |
 */
/* Расширенные лиералы объектов */ 
	{
		let temp = "Name";
		let object = {
			["Last" + temp ]: "John"
		}
		console.log(object.LastName); // John
	}


