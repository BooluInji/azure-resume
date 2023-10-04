window.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
});

const functionApiUrl = "https://getresumecounter-inji.azurewebsites.net/api/GetResumeCounter?code=VqvXhRU2TzlGgyYmk8BAgH6TUOTYD2qT014wzVy9SZW9AzFuTcTnqQ=="
const localfunctionApi = "";

const getVisitCount = () => {
  let count = 30;
fetch(functionApiUrl).then(response => {
  return response.json()
}).then(response =>{
  console.log("Website called function API.");
  count = response.count;
  document.getElementById("counter").innerHTML= count;
}).catch(function(error){
  console.log(error);
});
return count;
}