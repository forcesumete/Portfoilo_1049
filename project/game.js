var timer;

function pageLoad() {
    // Your code here
}

function startGame() {
    alert("Ready");
    clearScreen();
    addBox();
    timeStart();
}

function timeStart() {
    var TIMER_TICK = 1000;
    var timerValue = 10; // เวลาที่กำหนดในวินาที
    var x = document.getElementById('clock');
    x.innerHTML = timerValue;

    timer = setInterval(function() {
        timerValue--;
        x.innerHTML = timerValue;

        if (timerValue === 0) {
            clearInterval(timer);
            if (document.querySelectorAll("#layer div").length > 0) {
                alert("Game Over");
                clearScreen();
                location.reload();// เริ่มเกมใหม่
            } else {
                alert("You Win!");
                // โหลดหน้าใหม่
                location.reload();
            }
        }
    }, TIMER_TICK);
}

function addBox() {
    var numbox = parseInt(document.getElementById('numbox').value);
    var gameLayer = document.getElementById('layer');
    var colorDrop = document.getElementById('color').value;

    for (var i = 0; i < numbox; i++) {
        var tempbox = document.createElement("div");
        tempbox.className = "square " + colorDrop;
        tempbox.style.left = Math.random() * (500 - 50) + "px"; // ปรับขอบเขตให้น้อยลง
        tempbox.style.top = Math.random() * (500 - 50) + "px"; // ปรับขอบเขตให้น้อยลง
        gameLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

function bindBox(box) {
    box.onclick = function() {
        box.parentNode.removeChild(box);

        // เช็คว่าไม่มีกล่องเหลืออยู่
        if (document.querySelectorAll("#layer div").length === 0) {
            alert("You Win!");
            // โหลดหน้าใหม่
            location.reload();
        }
    }
}

function clearScreen() {
    var allbox = document.querySelectorAll("#layer div");

    for (var i = 0; i < allbox.length; i++) {
        allbox[i].parentNode.removeChild(allbox[i]);
    }
}
