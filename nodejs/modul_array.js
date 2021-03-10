//var array_counter = function(myarr){
module.exports.array_counter = function(myarr){
    return "В массиве " + myarr.length + " элемента(ов)";
};

module.exports.somevalue = 451;

module.exports.multiple = function(x, y){
    return `${x} умножить на ${y} = ${x*y}`;//шаблон строки
};


//module.exports.array_counter = array_counter;
//module.exports.multiple = multiple;
//module.exports.somevalue = somevalue;


//пример
module.exports = {
    array_counter: array_counter,
    multiple: multiple,
    somevalue: somevalue
}