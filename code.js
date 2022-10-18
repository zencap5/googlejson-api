
const API_endpoint =
'https://opensheet.elk.sh/15hnoGIU9pIDL6LEe06Ht98x4obSx_paI-rvWiYDrm90/json';

function get_data(){
fetch(API_endpoint)
.then((data) => {
  return data.json();
})
.then((objectData) => {
  console.log(objectData);

  let dataAPI = '';
  objectData.map((values) => {
    dataAPI += `
    <div class="card">
    <h1 class="header">${values.NAME}</h1>
    <img class="image" src="${values.IMAGE}"/>
    </div>
    `;
  });
  document.getElementById('Cards-Container').innerHTML = dataAPI;
setInterval(function(){ 
    //code goes here that will be run every 5 seconds.    
}, 5000);  
});
};
get_data()
