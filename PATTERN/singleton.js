/**
 * Паттерн СинглТон предпологает класс с одним экземпляром
 * и с единой точкой доступа
 * близок к петтерн "модуль"
 */

var Singleton = (function (){

    var instans;
    var SERVER = 'localhost';

    function Singleton () {
        if ( !instans ) {
            instans = this;
        } else {
            return instans;
        }
    }

    Singleton.prototype.connect = function () {
        console.log('connect ' + SERVER);
    };

    return Singleton;
}());

var s1 = new Singleton();
var s2 = new Singleton();

console.group('Pattern Singleton');
    console.log( s1 === s2 );
    s1.connect();

console.groupEnd('Pattern Singleton');