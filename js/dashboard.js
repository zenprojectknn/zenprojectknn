function rand(min,max){
  return Math.random()*(max-min)+min;
}

function animateValue(el, val){
  el.animate(
    [{transform:"scale(1)"},{transform:"scale(1.05)"},{transform:"scale(1)"}],
    {duration:300}
  );
  el.textContent = val;
}

function update(){

  const suhu = rand(24,35).toFixed(1);
  const hum  = rand(55,90).toFixed(1);
  const arah = rand(0,360).toFixed(0);
  const ws   = rand(0,10).toFixed(1);
  const lux  = rand(100,2000).toFixed(0);

  animateValue(suhuEl, suhu);
  animateValue(kelembabanEl, hum);
  animateValue(arahAnginEl, arah);
  animateValue(kecepatanAnginEl, ws);
  animateValue(cahayaEl, lux);

  let status="Cerah";
  let icon="☀️";

  if(hum>80 && lux<500){
    status="Hujan";
    icon="🌧️";
  }else if(lux<300){
    status="Mendung";
    icon="☁️";
  }

  statusCuaca.textContent=status;
  statusIcon.textContent=icon;
}

const suhuEl = document.getElementById("suhu");
const kelembabanEl = document.getElementById("kelembaban");
const arahAnginEl = document.getElementById("arahAngin");
const kecepatanAnginEl = document.getElementById("kecepatanAngin");
const cahayaEl = document.getElementById("cahaya");
const statusCuaca = document.getElementById("statusCuaca");
const statusIcon = document.getElementById("statusIcon");

update();
setInterval(update,3000);
