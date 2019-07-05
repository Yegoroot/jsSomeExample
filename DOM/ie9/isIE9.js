// ---------------------------------------------------------------------

// ЕСЛИ IE9 то подключаем файл 

if( GLOBAL_OBJ.isIE9() ) {
	
	var script = document.createElement('script');
		script.src = "./assets/js/ie9.js";
		document.getElementsByTagName('body')[0].appendChild(script);


} else {

	console.log("%c<> with ♥ by NKH", "color:#E21A1A;font-weight:700;");
}