import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import { UseForm } from './hooks/useForm'
import WeatherBox from './components/WeatherBox'

function App() {

  const urlBase = "https://api.openweathermap.org/data/2.5/weather"
  // ?q={city name}&appid={API key}
  const apiKey ="633ddf9389ca7bc201458db8e6f31bd9"

  const initialForm = {
    city: ""
  }

  const {city,onInputChange} = UseForm(initialForm)
  const [dataClima, setDataClima] = useState(null)
  const [errorData, setErrorData] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchClima(city)
  }

  const fetchClima = async () => {
    try{
      const response = await fetch(`${urlBase}?q=${city}&appid=${apiKey}`)
      const data = await response.json()
      if(data.cod == 404){
        setErrorData(true)
      }else{
        setErrorData(false)
        setDataClima(data)
      }
    }catch(error){
      console.log("error",error)
    }
  }

  return (
    <>
      <h1 className='text-center text-2xl font-bold'>Weather App</h1>
      <InputBox data={city} onChange={onInputChange} onSubmit={handleSubmit}/>
      <div className='text-center'>
        {dataClima && (
          <WeatherBox data={dataClima}/>
        )}
        {errorData && <span>City Not Found</span> }
      </div>
    </>
  )
}

export default App
