function random(min,max){
  return (Math.random()*(max-min)+min).toFixed(1);
}

function update(){
  const suhu=random(22,35);
  const hum=random(50,90);
  const arah=random(0,360);
  const speed=random(0.5,8);
  const lux=random(200,1200);

  document.getElementById("suhu").innerText=suhu;
  document.getElementById("hum").innerText=hum;
  document.getElementById("arah").innerText=arah;
  document.getElementById("speed").innerText=speed;
  document.getElementById("lux").innerText=lux;

  let status="Cerah";

  if(hum>80 && speed>4) status="Hujan";
  else if(lux<300) status="Mendung";

  document.getElementById("status").innerText=status;
}

update();
setInterval(update,3000);
