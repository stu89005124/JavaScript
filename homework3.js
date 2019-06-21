let timer;
let id = 1;
let starting = false;
let win;
var bettotal = parseInt(0);
let delay = 3000, i = 1;
function startgame() {
    let Total = parseInt(document.getElementById('balance').textContent);
    if (starting) {
        alert('遊戲正在進行中');
        return;
    }
    document.getElementById('log').innerHTML = '';
    let one = parseInt(document.getElementById('one').value);
    let two = parseInt(document.getElementById('two').value);
    let three = parseInt(document.getElementById('three').value);
    let four = parseInt(document.getElementById('four').value);
    let five = parseInt(document.getElementById('five').value);
    let six = parseInt(document.getElementById('six').value);
    let money = [one, two, three, four, five, six];
    for (let bet of money) {
        bettotal = bet + bettotal;
    }
    if (bettotal > Total) {
        alert('金額不足');
        return;
    }
    document.getElementById('balance').innerHTML = Total - bettotal;
    starting = true;
    timer = setInterval(doThing, 50);
    let rand = parseInt(Math.random() * (2000));
    setTimeout(function () {
        clearInterval(timer);
        starting = false;
        for (i = 1; i <= 28; i++) {
            if (document.getElementById(i).style.borderColor != '') {
                champ = document.getElementById(i).firstChild.textContent;
                if (money[champ - 1] != 0) {
                    win = calmoney(money[champ - 1], parseInt(champ));
                    document.getElementById('log').innerHTML = `恭喜您贏得: ${win}`
                    document.getElementById('balance').innerHTML = Total + win;
                }
            }
        }
    }, 1000 + rand);
}

function doThing() {
    if (id < 28) {
        id++;
    } else {
        document.getElementById('28').style.borderColor = '';
        id = 1;
    }
    first = document.getElementById(id);
    if (id > 1) {
        behind = document.getElementById(id - 1);
        behind.style.borderColor = '';
    }
    first.style.borderColor = 'yellow';
}

function addspeed() {
    console.log(i++);
    if (delay <= 10) {
        doThing2();
        return;
    }
    setTimeout(doThing, delay);
    delay -= delay / 5;
}
function slowspeed() {
    console.log(i--);
    if (delay >= 3000) {
        return;
    }
    setTimeout(doThing2, delay);
    delay *= 1.5;
}
function restart() {
    let doublecheck = confirm('確定要重置嗎');
    if (doublecheck) {
        for (i = 1; i <= 28; i++) {
            document.getElementById(i).style.borderColor = '';
            id = 1;
        }
    }
}

function calmoney(_money, champ) {
    switch (champ) {
        case 1:
            _money = _money * 2;
            break;
        case 2:
            _money = _money * 2.5;
            break;
        case 3:
            _money = _money * 3.7;
            break;
        case 4:
            _money = _money * 4;
            break;
        case 5:
            _money = _money * 5;
            break;
        case 6:
            _money = _money * 6;
            break;
    }
    return _money;
}