
const API='https://api.openf1.org/v1';
async function loadData(){
 const status=document.getElementById('status');
 status.textContent='Loading...';
 try{
   const drivers=await fetch(API+'/drivers?session_key=latest').then(r=>r.json());
   const tbody=document.querySelector('#leaderboard tbody');
   tbody.innerHTML='';
   drivers.slice(0,20).forEach((d,i)=>{
     tbody.innerHTML += `<tr><td>${i+1}</td><td>${d.name_acronym||d.broadcast_name||''}</td><td>--</td><td>--</td></tr>`;
   });
   status.textContent='Connected to OpenF1';
 }catch(e){
   status.textContent='OpenF1 connection error';
 }
}
document.getElementById('refreshBtn').onclick=loadData;
loadData();
