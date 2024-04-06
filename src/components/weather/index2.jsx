import React, { useEffect, useState } from 'react'
import Search2 from '../search/index2';

const Weather2 = () => {
 
  const [search,setSearch] = useState('');
  const [loading,setLoading] = useState(false);
  const [weatherData,setWeatherData] = useState(null)

  async function fetchDataWeather(param){
    setLoading(true)
    try{

      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${param}&appid=7867e5b0f752bfbc463bb28084ac0572`)

      const data = await res.json();
      console.log(data);

      if(data){
        setWeatherData(data);
        setLoading(false);
      }

    }
    catch(e){
      setLoading(false)
    }

  }

  function handleClick(){
    fetchDataWeather(search)
    setSearch('')
  }

  function getCurrentDAte(){
    return new Date().toLocaleDateString('en-us' ,{
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }


  useEffect(()=>{
   fetchDataWeather('Arak')
  },[])
  return (
    <div>
      <Search2
      search={search}
      setSearch={setSearch}
      handleClick={handleClick}/>
      {
        loading ? (<div className='loading'>Loading...</div>) :(
          <div>
            <div className="city-name"><h1>
             {weatherData?.name}  <span>{weatherData?.sys?.country}</span> </h1></div>
             <div className="date">
              {getCurrentDAte()}
             </div>
             <div className="temp">
              {Math.round(weatherData?.main?.temp)}°C
             </div>
             <div className="description">
              {weatherData?.weather[0]?.description}
             </div>
             <div className="weather-info">
              <div className="column">
                <div>
                  <p>{weatherData?.wind?.speed} Km/h</p>
                  <p>Wind</p>
                </div>
              </div>
              <div className="column">
                <div>
                  <p>{weatherData?.main?.humidity} %</p>
                  <p>Humidity</p>
                </div>
              </div>
             </div>

          </div>
        )
      }

    </div>
  )
}

export default Weather2
