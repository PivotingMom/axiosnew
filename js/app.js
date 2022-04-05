function callapi(event){
  axios.request({
    method: "GET",
    url:"https://www.themealdb.com/api/json/v1/1/search.php", 
    params: {
      f:"c"

    }
  }).then(searchedSuccess).catch(searchedFailed);
  console.log(event);
}

function searchedSuccess(response){
  console.log(response.data.meals[0].strMeal);console.log(response.data.meals[2].strIngredient1);
  console.log(response.data.meals[2].strMeasure1);
}

function searchedFailed(error){
  console.log(error);
}


let api = document.getElementById('api');
api.addEventListener('click', callapi );





function changeBackground(event) {
  console.log(event);
  document.getElementById("hapi").style.backgroundColor = "red";

  let x = document.getElementById('hapi');
x.addEventListener('mouseover', changeBackground );}

function changeBackground(event){
  axios.request({
    method: "GET",
    url:"https://www.themealdb.com/api/json/v1/1/search.php", 
    params: {
      f:"z"

    }
  }).then(searchedSuccess).catch(searchedFailed);
  console.log(event);
}

function searchedSuccess(response){
  console.log(response);
}

function searchedFailed(error){
  console.log(error);
}

