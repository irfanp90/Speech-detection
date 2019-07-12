window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults=true 

let p = document.createElement("P");
const words = document.querySelector(".words");
words.appendChild(p)

recognition.addEventListener("result", event => {
    console.log(event)
    const transcript = Array.from(event.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");

    p.textContent = transcript;
    if(event.results[0].isFinal){
        p=document.createElement("p");
        words.appendChild(p)
    }
    console.log(transcript);
})

recognition.addEventListener("end", recognition.start); 

recognition.start()

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "PM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();