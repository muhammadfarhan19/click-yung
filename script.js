const waktu = document.getElementById("waktu");
const text = document.getElementById("text");
const btn = document.getElementById("btn");
const waktuSapa = document.getElementById("waktu-sapa");
const lagu = document.getElementById("lagu");
const content = document.getElementById('content')

const getTime = () => {
  const clock = new Date();
  const hour = clock.getHours();
  const minute = clock.getMinutes();
  const second = clock.getSeconds();
  waktu.innerHTML = `${hour} : ${minute} : ${second}`;

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

const load = () => {
  content.style.display = 'none';
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  content.style.display = 'flex';
  lagu.play();
})
