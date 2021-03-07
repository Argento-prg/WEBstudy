function valid(form){
    var name = form.name.value;
    var email = form.email.value;
    var password = form.password.value;
    var RePassword = form.checkpass.value;
    var state = form.state.value;
    var email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var fail = false;
    if(name == "" || name == " "){
        fail = "Вы не ввели своё имя";
    }else if(email_pattern.test(email) == false || (email.split('@').length -1 == 0)){
        fail = "Вы ввели email неправильно";
    }else if(password == ""){
        fail = "Вы не вввели пароль";
    }else if(password != RePassword){
        fail = "Пароли не совпадают";
    }else if(state == ""){
        fail = "Укажите пол";
    }
    if(fail){
        alert(fail);
        return false;
    }else{
        window.location = "http://google.com";
    }
}
var id = setInterval("myFunc_1()", 1000);
var counter = 0;
var counter_time = 0;

function myFunc_1(){

    counter++;
    alert("Секунд прошло - " + counter);
    if(counter == 3){
        clearInterval(id);
    }
    var p = Math.PI;
    alert(p);
}

function timer(){
    counter_time++;
    document.getElementById("count").innerHTML = counter_time;
    setTimeout("timer()", 1000);
}

var date = new Date();
text_year = " Год сейчас - " + date.getFullYear();
text_month = "Месяц сейчас - " + date.getMonth();
text_day = "День сейчас - " + date.getDate();
text_hour = "Часов сейчас - " + date.getHours();
text_min = "Минут сейчас - " + date.getMinutes();
text_sec = "Секунд сейчас - " + date.getSeconds();
alert(date);

var text = "";
var arr = new Array(2, 3, 56, 12, 23, 590, 123, 2);
text = "Длина массива - " + arr.length;
text = "\nМассив состоит из - " + arr.join(", ");//строка, все элементы через символ в скобках
text = "Sort arr - " + (arr.sort()).join(", ");
