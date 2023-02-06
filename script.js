// const waktu = ;
const text = document.getElementById("text");
const btn = document.getElementById("btn");
// const lagu = ;
const content = document.getElementById("content");
const container = document.querySelector(".container");

// const load = () => {
//   content.style.display = "none";
// };

btn.addEventListener("click", (e) => {
  // e.preventDefault();
  container.innerHTML = `
      <div class="content" id="content">
        <audio src="lagu.mp3" type="audio/mpeg" id="lagu"></audio>
        <div class="waktu" id="waktu">00:00</div>
        <div class="text" id="text">Santun <span id="waktu-sapa">siang</span> hadir support</div>
      </div>
  `;
  // getTime();
  document.getElementById("lagu").play();
});



const getTime = () => {
  const clock = new Date();
  const hour = clock.getHours();
  const minute = clock.getMinutes();
  const second = clock.getSeconds();
  document.getElementById("waktu").innerHTML = `${hour} : ${minute} : ${second}`;
  
  const waktuSapa = document.getElementById("waktu-sapa");
  
  if (hour <= 10) {
    waktuSapa.innerHTML = "pagi";
  }
  if (hour >= 10 && hour <= 15) {
    waktuSapa.innerHTML = "siang";
  }
  if (hour >= 15 && hour <= 18) {
    waktuSapa.innerHTML = "sore";
  }
  if (hour >= 18) {
    waktuSapa.innerHTML = "malam";
  }

};
setInterval(getTime, 1000);

