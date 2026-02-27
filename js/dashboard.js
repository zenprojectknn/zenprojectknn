const el = id => document.getElementById(id);

function rand(a,b){return Math.random()*(b-a)+a;}

function animate(node,val){
  node.animate(
    [{transform:"scale(1)"},{transform:"scale(1.08)"},{transform:"scale(1)"}],
    {duration:300}
  );
  node.textContent=val;
}

function update(){
  const s = rand(24,35).toFixed(1);
  const h = rand(55,90).toFixed(1);
  const d = rand(0,360).toFixed(0);
  const w = rand(0,10).toFixed(1);
  const l = rand(100,2000).toFixed(0);

  animate(el("suhu"),s);
  animate(el("hum"),h);
  animate(el("dir"),d);
  animate(el("spd"),w);
  animate(el("lux"),l);

  let st="Cerah", ic="☀️";
  if(h>80 && l<500){st="Hujan";ic="🌧️";}
  else if(l<300){st="Mendung";ic="☁️";}

  el("status").textContent=st;
  el("icon").textContent=ic;
}

update();
setInterval(update,3000);
