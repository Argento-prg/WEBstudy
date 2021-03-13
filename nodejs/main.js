/*classes, import modules
console.log("Pipec");

console.log(__filename);

class LOL{
    #x = 1;//private field
};

p = new LOL();
console.log(p.x.toString());

var myarr = require("./modul_array")
console.log(myarr.array_counter([1, 2, "3", 4]))*/

/*events
var events = require('events');//импорт инструмента создания событий

var myEmit = new events.EventEmitter();

myEmit.on('some_event', function(text){
    console.log(text);
});//вызов функции при событии some_event

myEmit.emit('some_event', 'Обработчик событий сработал!');//создать действие some_event

var util  = require('util');//импорт всех событий для определённых объектов

var Cars = function(model){
    this.model = model;
};//конструктор объекта Cars

util.inherits(Cars, events.EventEmitter);//для всех объектов Cars будет унаследован обработчик событий 


var bmw = new Cars('BMW');

var audi = new Cars('Audi');

var volvo = new Cars('Volvo');

var cars = [bmw, audi, volvo];

cars.forEach(function(car){
    car.on('speed', function(text){
        console.log(car.model = " speed is - " + text);
    });
});

bmw.emit('speed', '150');
*/

/*read/write file

var fs = require('fs');

//var file_readed = fs.readFileSync('text.txt', 'utf8');//пока не прочитаем весь файл, код далее не выполнится

//var message = "Привет мир!\n" + file_readed;
//fs.writeFileSync('some_new_file.txt', message);

fs.readFile('text.txt', 'utf8', function(err, data){
    console.log(data);
});//функция, которая выполнится после прочтения файла (асинхронное прочтение)

console.log("Test");//выведется раньше, чем текст из файла

//рекомендуется асинхронность, так как меньше времени
*/

/*Работа с директориями
 */

var fs = require('fs');

fs.unlink('text.txt', function(){});//после удаления файла выполнится переданная функция

fs.mkdirSync('new-one');//создание синхронно папки

fs.rmdirSync('new-one');//удаление синхронно папки, но если есть файлы, то ничего не произойдёт

