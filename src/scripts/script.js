window.onload = function() {

    function User(lifes) { 
        this.name = "Dima";
        this.greating = function() {
        var element = document.getElementById("greeting");
        element.innerText = "hello " + (this.name != null ? (this.name != "" ? this.name :  "anomym") : "anonym");
        }
    }
    
    var user = new User(10);
    user.name = prompt("Hi! What's your name, friend?");
    user.greating();

    toShow('intro'); // Вывод Плитки с инструкцией
}
function startGame() {
    
    toShow('game'); // Вывод Плитки с самой игрой
    toHide('intro');
    
    function Button(id) {
        this.id = id;
        this.isVisible = true;
    }
    button1 = new Button('first');
    button2 = new Button('second');
    button3 = new Button('third');
    button4 = new Button('fourth');
  
    var showTime = decreaseTime(1000);
    setInterval(showTime, 10000); // уменьшение времени показа кнопки каждые 10 секунд

    button1.onclick = destroyButton(button1);
    button2.onclick = destroyButton(button2);
    button3.onclick = destroyButton(button3);
    button4.onclick = destroyButton(button4);
    
}
function destroyButton(button, timerId) { 
    if (button.isVisible == true) {
        //clearTimeout(timerId);
        var element = document.getElementById(button.id);
        element.style.display = 'none';
        button.isVisible = false;

        var randomShowTime = getRandomTime(1500, 3000);
        setTimeout(showButton , randomShowTime, button);
        //timerId = setTimeout(showButton , randomShowTime, button, timerId);

        var counter = document.getElementById('counter');
        counter.innerHTML++;
    }
    
}
function showButton(button, timerId) {
    if (button.isVisible == false) {
        //clearTimeout(timerId);
        var element = document.getElementById(button.id);
        element.style.display = 'inline-block'; 
        button.isVisible = true;
        //timerId = setTimeout(destroyButton, 3000, button, timerId);
    }
    

}
// **********Вспомогательные функции*********

function toHide() { // Сокрытие элементов по id
    for (var i = 0; i < arguments.length; i++) {
        var element = document.getElementById(arguments[i]);
        element.style.display = 'none'; 
    }
}
function toShow() { // Показ элементов по id
    for (var i = 0; i < arguments.length; i++) {
        var element = document.getElementById(arguments[i]);
        element.style.display = 'inline-block'; 
    }
}
function getRandomTime(min, max) { // рандомное целое число от min до max
    return Math.floor(Math.random() * (max - min +1)) + min;
}
function decreaseTime(time) { // уменьшение времени показа кнопок
    var showTime = time;
    return function() {
        return showTime -= 100;
    }
}
// *******************************************

