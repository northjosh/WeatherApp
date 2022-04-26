// frontend?
const locForm =document.forms[0]
const cityForm = document.forms[1]
const option = document.querySelectorAll("option");


// display search form based on Parameter selected

setInterval(()=>{
    if(option[1].selected){
        locForm.classList.remove("loc-form");
        cityForm.classList.add("city-form")
    }else if(option[0].selected){
        cityForm.classList.remove('city-form');
        locForm.classList.add("loc-form")
    }
    // console.log(option[1].selected);
    
}, 100)






//using form data as parameters for API request

locForm.addEventListener("submit", async ()=>{
    const longitude= locForm['long'].value
    const latitude=locForm['lat'].value

    const options = {
        method: 'GET',
        url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
        params: {
          aggregateHours: '24',
          location: `${longitude}, ${latitude}`,
          contentType: 'json',
          unitGroup: 'uk',
          shortColumnNames: '0'
        },
        headers: {
          'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com',
          'x-rapidapi-key': '011f2a7ca6msha81573e5a82504fp154022jsnc2c2fdf1af07'
        }
    };
      
    await axios.request(options).then(function (response) {

        weatherData = response.data
      }).catch(function (error) {
        console.error(error);
      });


    

});

cityForm.addEventListener("submit", async ()=>{
    const cityName = cityForm['cityName'].value;
    const options = {
        method: 'GET',
        url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
        params: {
          aggregateHours: '24',
          location: cityName,
          contentType: 'json',
          unitGroup: 'uk',
          shortColumnNames: '0'
        },
        headers: {
          'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com',
          'x-rapidapi-key': '011f2a7ca6msha81573e5a82504fp154022jsnc2c2fdf1af07'
        }
    };
      
   await axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });


})

function displayData(data){
    
}

async function grrWeather(){
  const options = {
    method: 'GET',
    url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
    params: {
      aggregateHours: '24',
      location: 'Washington,DC,USA',
      contentType: 'json',
      unitGroup: 'us',
      shortColumnNames: '0'
    },
    headers: {
      'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com',
      'x-rapidapi-key': '011f2a7ca6msha81573e5a82504fp154022jsnc2c2fdf1af07'
    }
  };
  
  await axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

}

grrWeather();


