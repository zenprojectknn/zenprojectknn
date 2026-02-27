function random(min, max){
  return (Math.random() * (max - min) + min).toFixed(1);
}

function updateData(){

  const suhu = random(24, 35);
  const kelembaban = random(55, 90);
  const arah = random(0, 360);
  const kecepatan = random(0, 10);
  const cahaya = random(100, 2000);

  document.getElementById("suhu").textContent = suhu;
  document.getElementById("kelembaban").textContent = kelembaban;
  document.getElementById("arahAngin").textContent = arah;
  document.getElementById("kecepatanAngin").textContent = kecepatan;
  document.getElementById("cahaya").textContent = cahaya;

  let status = "Cerah";

  if(kelembaban > 80 && cahaya < 500){
    status = "Hujan";
  }else if(cahaya < 300){
    status = "Mendung";
  }

  document.getElementById("statusCuaca").textContent = status;
}

updateData();
setInterval(updateData, 3000);
