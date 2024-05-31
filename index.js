const but1 = document.querySelector('.button1');
const but2 = document.querySelector('.button2');
const cont = document.querySelector('.container');
const cont2 = document.querySelector('.cont2');
const title = document.querySelector('.title');
const subTitle = document.querySelector('.subTitle');
const image = document.querySelector('.image');
const wrap = document.querySelector('.wraper');
const p4 = document.querySelector('.p4');
const p5 = document.querySelector('.p5');
const p3 = document.querySelector('.p3');
const p6 = document.querySelector('.p6');
const p7 = document.querySelector('.p7');
const p8 = document.querySelector('.p8');
const p9 = document.querySelector('.p9');
// const cityTit = "MY CITY";
// subTitle.textContent = 'weater of ' + cityTit;



async function wet(){
  await fetch('http://api.openweathermap.org/data/2.5/weather?q=KHARKIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
  .then(response => response.json())
  .then(data => {
    p3.textContent = `city : ${data.name}`;
    p4.textContent = `temp : ${data.main.temp}`;
    p5.textContent = `pressure : ${data.main.pressure}`;
    p6.textContent = `description : ${data.weather[0].description}`;
    p7.textContent = `humidity : ${data.main.humidity}`;
    p8.textContent = `wind speed : ${data.wind.speed}`;
    p9.textContent = `wind deg : ${data.wind.deg}`;

    const img = 'http://openweathermap.org/img/w/10d.png'
    image.setAttribute('src', img);

    // console.log(data);
  })
}

  wet();

but1.addEventListener('click', show);
function show(){
  but1.style.display = 'none';
  but2.style.display = 'block';
  cont2.style.display = 'flex';
  cont.style.display = 'none';
  wrap.style.display = 'flex';
  title.textContent = 'Details';
  subTitle.textContent = 'Fetch Response';
};

but2.addEventListener('click', close); 
function close(){
  but1.style.display = 'block';
  but2.style.display = 'none';
  cont.style.display = 'flex';
  cont2.style.display = 'none';
  wrap.style.display = 'none';

}







