let timeclock = document.querySelector(".timeClock");
let top1_99 = document.querySelector(".top1_99");
let timeStop = document.querySelector(".timeStop");
let admin = document.querySelector(".admin");
let con = document.querySelector(".con");
let say = document.querySelector(".say");

let dayandmo = document.querySelector(".dayandmo");

let alshr = document.querySelector(".alshr");

let timeC = ""

let Day = ""
let Month = ""
let Data = ""
let Year = ""
setInterval(() => {

let now = new Date();                     // 1
let hours = now.getHours();               // 2
let minutes = now.getMinutes();           // 3
let Seconds = now.getSeconds(); 
Year = now.getFullYear()

 Day = now.getDay()
 Month = now.getMonth() + 1 
 Data  = now.getDate()

let period = hours >= 12 ? "PM" : "AM";   // 4
hours = hours % 12 || 12;                 // 5

minutes = minutes.toString().padStart(2, "0"); // 6
Seconds = Seconds.toString().padStart(2, "0"); // 6

let time12 = `${hours}:${minutes}:${Seconds} ${period}`; // 7


                timeC = time12         // 8

}, 1000);
    let days = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];

let today = new Date().getDay(); // رقم اليوم
let dayName = days[today];       // الاسم من المصفوفة




timeclock.onclick = function(){
    con.innerHTML = ""
    timeclock.id = "active"
    timeStop.removeAttribute("id");
    top1_99.removeAttribute("id");
    admin.removeAttribute("id");

    
        con.innerHTML =""

 let say = document.createElement("p");
say.className = "pTime";

let dayandmo = document.createElement("p");
dayandmo.className = "dayandmo";

let alshr = document.createElement("p");
alshr.className = "alshr";

let W = document.createElement("p");
W.className = "W";

let div = document.createElement("div");

// ضيف العناصر جوة الـ container
con.appendChild(say);
div.appendChild(alshr);
div.appendChild(dayandmo);
con.appendChild(div);
con.appendChild(W);



            setInterval(() => {
            say.textContent = timeC
            dayandmo.textContent = `${dayName} , شهر ${Month} , يوم ${Data}`
            W.textContent = `${Year}`

        }, 0);

    
 
   
    
}
timeStop.onclick = function () {
  // تحديد النشط
  timeStop.id = "active";
  timeclock.removeAttribute("id");
  top1_99.removeAttribute("id");
  admin.removeAttribute("id");

  // فضي المحتوى
  con.innerHTML = "";

  // أنشئ div للزر الرئيسي
  let div = document.createElement("div");
  div.className = "TimesTop";
  con.appendChild(div);

  // مسك العنصر بعد إنشاؤه
  let TimesTop = document.querySelector(".TimesTop");

  // عند الضغط على الزر الرئيسي
  TimesTop.onclick = function () {
  

    // أنشئ div رئيسي داخلي
    let div = document.createElement("div");
    div.className = "listTimetop";
    con.appendChild(div);

    // تأثير على الزرار
    TimesTop.style.filter = "blur(2px)";

    // أنشئ boxTime
    let boxTime = document.createElement("div");
    boxTime.className = "boxTime";

    // الوقت
    let time700 = document.createElement("p");
    time700.className = "time700";
    time700.textContent = "7:00 AM";

    // الزر
    let btn700 = document.createElement("button");
    btn700.className = "btntime700";
    
    // ربط العناصر
    boxTime.appendChild(time700);
    boxTime.appendChild(btn700);

      
    div.appendChild(boxTime);
    btn700.innerHTML = "X"
setInterval(() => {

        

  if (btn700.classList.contains("active1")) {
    TimesTop.style.color = "rgba(255, 255, 255, 1)";
div.remove()


        TimesTop.style.filter = "";
        TimesTop.classList.replace("TimesTop","TimesTopE")
        TimesTop.textContent = time700.textContent
    // 🕒 الوقت الحالي (يتحدث كل ثانية)
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes().toString().padStart(2, "0");
    let period = h >= 12 ? "PM" : "AM";
    let hh = h % 12 || 12;
    let timeNOW = `${hh}:${m} ${period}`;

    // ⏰ الوقت المحفوظ
    let timere = time700.textContent;

    if (timeNOW === timere && !document.querySelector(".go")) {
      let go = document.createElement("div");
      let btn = document.createElement("button");
      go.textContent = `الساعه الان (${timeNOW})`;
      btn.textContent = "OK";
      go.appendChild(btn);
      go.className = "go";
      btn.className = "OK";
      con.appendChild(go);

      let sound = document.getElementById("alarmSound");
      sound.currentTime = 0;
      sound.loop = true;
      sound.play().catch(err => console.log("Autoplay blocked:", err));

      btn.onclick = function () {
        sound.pause();
        go.remove();
        location.reload();
        con.appendChild(`<p class="say">Welcome</p>`)
      };
    }
  } else {
    TimesTop.style.color = "rgba(255, 255, 255, 0.568)";
  }

}, 1000);

    // 🟢 toggle عند الضغط على الزر
btn700.onclick = function () {
  btn700.classList.toggle("active1");
  time700.classList.toggle("active2");
};
// 🟢 إنشاء الرينجات مرة واحدة فقط
time700.onclick = function () {
  // لو الرينج موجود بالفعل → ما تعملش حاجة
  if (boxTime.querySelector(".hourRange")) return;

  // 📦 ديف للساعات
  let hourDiv = document.createElement("div");
  hourDiv.className = "rangeBox hourBox";

  let hourLabel = document.createElement("label");
  hourLabel.textContent = "Hour:";

  let rangeHour = document.createElement("input");
  rangeHour.type = "range";
  rangeHour.min = "0";
  rangeHour.max = "23";
  rangeHour.value = "7";
  rangeHour.className = "timeRange hourRange";

  hourDiv.appendChild(hourLabel);
  hourDiv.appendChild(rangeHour);

  // 📦 ديف للدقايق
  let minDiv = document.createElement("div");
  minDiv.className = "rangeBox minBox";

  let minLabel = document.createElement("label");
  minLabel.textContent = "Minute:";

  let rangeMin = document.createElement("input");
  rangeMin.type = "range";
  rangeMin.min = "0";
  rangeMin.max = "59";
  rangeMin.value = "0";
  rangeMin.className = "timeRange minRange";

  minDiv.appendChild(minLabel);
  minDiv.appendChild(rangeMin);
  minDiv.className ="minDivR"

  // زرار Save
  let saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.className = "saveBtn";

  // ضيفهم جوه boxTime
  boxTime.appendChild(hourDiv);
  hourDiv.appendChild(minDiv);
  boxTime.appendChild(saveBtn);

  // function لتحديث الوقت
  function updateTime() {
    let hour = parseInt(rangeHour.value);
    let minute = parseInt(rangeMin.value);

    let period = hour >= 12 ? "PM" : "AM";
    let h = hour % 12 || 12;
    let m = minute.toString().padStart(2, "0");

    let newTime = `${h}:${m} ${period}`;
    time700.textContent = newTime;
  }

  // تحديث مع تحريك أي رينج
  rangeHour.oninput = updateTime;
  rangeMin.oninput = updateTime;

  // 🟢 لما تدوس Save
  saveBtn.onclick = function () {
    hourDiv.remove();
    minDiv.remove();
    saveBtn.remove();
  };

  // تحديث أول مرة
  updateTime();
};

  };
};

top1_99.onclick = function () {
   con.innerHTML = ""
    top1_99.id = "active"
    timeStop.removeAttribute("id");
    timeclock.removeAttribute("id");
    admin.removeAttribute("id");

  let t1_99 = document.createElement("p");
  let div = document.createElement("div");
  let turnOn = document.createElement("button");
  let reset = document.createElement("button");
div.appendChild(turnOn)
    div.appendChild(reset)
    div.className = "allbtn"

  t1_99.className = "t1_99"
  turnOn.className = "turnOn"
  reset.className = "reset"

   t1_99.textContent = "00:00:00:00"
  turnOn.textContent = "▶"
  reset.textContent ="reset"  

  con.appendChild(t1_99)
  con.appendChild(div)



let timer;         
  let milliseconds = 0; // نخزن الوقت بالملي ثانية
  let running = false;  // حالة العداد

  function formatTime(ms) {
    let h = String(Math.floor(ms / 3600000)).padStart(2, "0");
    let m = String(Math.floor((ms % 3600000) / 60000)).padStart(2, "0");
    let s = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    let cs = String(Math.floor((ms % 1000) / 10)).padStart(2, "0"); 
    return `${h}:${m}:${s}:${cs}`;
  }


  turnOn.onclick = function () {
    if (!running) {
      // أول ضغطة: تشغيل المؤقت
      running = true;
      turnOn.textContent = "⏸";
      timer = setInterval(() => {
        milliseconds += 10;
        t1_99.innerHTML = `<span>${formatTime(milliseconds)}</span>`;
      }, 10);
    } else {
      // ضغطة ثانية: إيقاف مؤقت
      running = false;
      turnOn.textContent = "▶";
      clearInterval(timer);
    }
  };
 // زر الإعادة
  reset.onclick = function () {
    clearInterval(timer);     // وقف العداد
    milliseconds = 0;         // رجّع الوقت صفر
    running = false;          // رجّع الحالة
    turnOn.textContent = "▶"; // رجّع شكل زر التشغيل
    t1_99.innerHTML = "00:00:00:00";
  };


}




admin.onclick = function () {

   con.innerHTML = ""
    admin.id = "active"
    timeStop.removeAttribute("id");
    timeclock.removeAttribute("id");
    top1_99.removeAttribute("id");



     let div = document.createElement("div");


  let img = document.createElement("img");
  img.className = "imgadmin";
  img.src = "./data/1.PNG";


  let p = document.createElement("p");
  p.textContent = "Ahmed - AWM";


  div.appendChild(img);
  div.appendChild(p);

  // 6️⃣ ضيف div كله للكونتينر
  con.appendChild(div);


}