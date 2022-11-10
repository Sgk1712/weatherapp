import React, { useState } from 'react'
import './App.css';
import axios from 'axios'
import ShowTemp from './ShowTemp';

function App() {
  const [city, setCity] = useState("")
  const [data, setData] = useState({
    description: "",
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    country: "",
  })
  const handleClick = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dac2e5bb446db75c4698ab2da8e622b8`)
      .then((response) => {
        setData({
          description: response.data.weather[0].description,
          temp: response.data.main.temp,
          temp_max: response.data.main.temp_max,
          temp_min: response.data.main.temp_min,
          humidity: response.data.main.humidity,
          sunrise: response.data.sys.sunrise,
          sunset: response.data.sys.sunset,
          country: response.data.sys.country,
        });
      })
  }

  return (
    <>
    <div className='Container text-center my-2'>
      <h1>
        Wheather app using React JS
      </h1>
      <input type="text" className='from-control' value={city} onChange={(e) => { setCity(e.target.value); } }></input>
      <button className='btn btn-primary mx-2' type='submit' onClick={handleClick}>Get Report</button>
    </div>
    <ShowTemp text = {data}>

    </ShowTemp>
    </>
  );
}

export default App;
