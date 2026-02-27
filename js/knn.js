function prosesKNN(){

  const s=Number(inSuhu.value);
  const h=Number(inHum.value);
  const a=Number(inAngin.value);
  const l=Number(inLux.value);

  if(!s||!h||!a||!l){
    hasilKNN.innerText="Input belum lengkap";
    return;
  }

  let kelas="Cerah";

  if(h>80 && a>4) kelas="Hujan";
  else if(l<300) kelas="Mendung";
  else if(s>33) kelas="Panas";

  hasilKNN.innerText=kelas;
}
