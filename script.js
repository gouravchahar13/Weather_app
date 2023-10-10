const submit=document.getElementById('submit');





async function api(city) {
  cityname.innerHTML=city
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
        
        temp.innerHTML = result.temp;
        
        humidity.innerHTML = result.humidity;
        min_temp.innerHTML = result.min_temp;
        max_temp.innerHTML = result.max_temp;
        
        

  } catch (error) {
    console.error(error);
  }
}

api("Bangalore");

submit.addEventListener('click',(e)=>{
  e.preventDefault();
  console.log(city.value)
  api(city.value);
  cityname.innerHTML=city.value;
})


