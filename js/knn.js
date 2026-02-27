const kRange = document.getElementById("kRange");
const kVal   = document.getElementById("kVal");
const rows   = document.getElementById("knnRows");

kRange.oninput=()=>kVal.textContent=kRange.value;

function rand(a,b){return Math.random()*(b-a)+a;}

function runKNN(){

  const k = parseInt(kRange.value);

  const classes=["Cerah","Mendung","Hujan"];

  const distances = [];
  for(let i=0;i<12;i++){
    distances.push({
      jarak:rand(0.2,3.5),
      kelas:classes[Math.floor(Math.random()*3)]
    });
  }

  distances.sort((a,b)=>a.jarak-b.jarak);
  const neigh = distances.slice(0,k);

  const count={};
  neigh.forEach(n=>count[n.kelas]=(count[n.kelas]||0)+1);

  let result="-",max=0;
  for(const c in count){
    if(count[c]>max){max=count[c];result=c;}
  }

  const avg = neigh.reduce((s,n)=>s+n.jarak,0)/k;

  document.getElementById("resultClass").textContent=result;
  document.getElementById("avgDist").textContent=avg.toFixed(3);
  document.getElementById("minDist").textContent=neigh[0].jarak.toFixed(3);

  rows.innerHTML="";
  neigh.forEach((n,i)=>{
    rows.innerHTML+=`
      <tr>
        <td>${i+1}</td>
        <td>${n.jarak.toFixed(3)}</td>
        <td>${n.kelas}</td>
      </tr>`;
  });

  document.querySelector(".knn-result").animate(
    [{transform:"scale(.96)",opacity:.6},{transform:"scale(1)",opacity:1}],
    {duration:350}
  );
}

document.getElementById("runBtn").onclick=runKNN;
runKNN();
