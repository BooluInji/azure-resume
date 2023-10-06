window.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
});

const functionApi =
  "https://getresumecounter-inji.azurewebsites.net/api/GetResumeCounter?code=VqvXhRU2TzlGgyYmk8BAgH6TUOTYD2qT014wzVy9SZW9AzFuTcTnqQ==";
const localfunctionApi = "http://localhost:7071/api/GetResumeCounter";

const getVisitCount = () => {
  let count = 30;
  fetch(functionApi)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log("Website called function API.");
      count = response.count;
      document.getElementById("counter").innerText = count;
    })
    .catch(function (error) {
      console.log(error);
    });
  return count;
};
