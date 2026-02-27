const suhuEl = document.getElementById("suhu");
const kelembabanEl = document.getElementById("kelembaban");
const arahAnginEl = document.getElementById("arahAngin");
const kecepatanAnginEl = document.getElementById("kecepatanAngin");
const cahayaEl = document.getElementById("cahaya");

const statusCuaca = document.getElementById("statusCuaca");
const statusIcon  = document.getElementById("statusIcon");

const knnClass = document.getElementById("knnClass");
const avgDistance = document.getElementById("avgDistance");
const nearestDistance = document.getElementById("nearestDistance");
const knnTable = document.getElementById("knnTable");

function rand(min,max){
  return Math.random()*(max-min)+min;
}

function animate(el,val){
  el.animate(
    [{transform:"scale(1)"},{transform:"scale(1.05)"},{transform:"scale(1)"}],
    {duration:250}
  );
  el.textContent=val;
}

/* ===== DATA SENSOR (SIMULASI) ===== */

function generateSensor(){

  return {
    suhu:rand(24,35).toFixed(1),
    hum:rand(55,90).toFixed(1),
    arah:rand(0,360).toFixed(0),
    ws:rand(0,10).toFixed(1),
    lux:rand(100,2000).toFixed(0)
  };

}

/* ===== SIMULASI DATA TRAINING ===== */

const trainingData = [
  {kelas:"Cerah"},
  {kelas:"Cerah"},
  {kelas:"Mendung"},
  {kelas:"Mendung"},
  {kelas:"Hujan"},
  {kelas:"Hujan"},
  {kelas:"Cerah"},
  {kelas:"Mendung"},
  {kelas:"Hujan"},
  {kelas:"Cerah"}
];

/* ===== SIMULASI PROSES KNN ===== */

function knnSimulation(k=5){

  const distances = trainingData.map(d => {
    return {
      jarak:rand(0.3,3.5),
      kelas:d.kelas
    };
  });

  distances.sort((a,b)=>a.jarak-b.jarak);

  const neighbors = distances.slice(0,k);

  const count={};

  neighbors.forEach(n=>{
    count[n.kelas]=(count[n.kelas]||0)+1;
  });

  let resultClass="-";
  let max=0;

  for(const c in count){
    if(count[c]>max){
      max=count[c];
      resultClass=c;
    }
  }

  const avg =
    neighbors.reduce((s,n)=>s+n.jarak,0)/neighbors.length;

  return {
    neighbors,
    resultClass,
    avg,
    nearest:neighbors[0].jarak
  };
}

/* ===== STATUS ICON ===== */

function iconByClass(c){
  if(c==="Hujan") return "🌧️";
  if(c==="Mendung") return "☁️";
  return "☀️";
}

/* ===== UPDATE DASHBOARD ===== */

function update(){

  const d = generateSensor();

  animate(suhuEl,d.suhu);
  animate(kelembabanEl,d.hum);
  animate(arahAnginEl,d.arah);
  animate(kecepatanAnginEl,d.ws);
  animate(cahayaEl,d.lux);

  const knn = knnSimulation(5);

  statusCuaca.textContent = knn.resultClass;
  statusIcon.textContent  = iconByClass(knn.resultClass);

  knnClass.textContent = knn.resultClass;
  avgDistance.textContent = knn.avg.toFixed(3);
  nearestDistance.textContent = knn.nearest.toFixed(3);

  knnTable.innerHTML="";

  knn.neighbors.forEach((n,i)=>{
    const tr=document.createElement("tr");
    tr.innerHTML=`
      <td>${i+1}</td>
      <td>${n.jarak.toFixed(3)}</td>
      <td>${n.kelas}</td>
    `;
    knnTable.appendChild(tr);
  });

}

update();
setInterval(update,3000);
