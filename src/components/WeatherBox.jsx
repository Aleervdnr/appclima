import React from 'react'

const difKelvin = 273.15


export default function WeatherBox({data}) {
  return (
    <div className='w-60 m-auto p-8 bg-slate-500 rounded border-[1px] border-black'>
        <div className='flex gap-2 place-content-center'>
            <span 
                className='text-2xl font-bold'
            >
                {data.name}
            </span>
            <span>
                {data.sys.country}
            </span>
        </div>
        <div className='flex place-content-center'>
            <span className='text-6xl'>
                {parseInt(data.main.temp - difKelvin)}°C
            </span>
        </div>
        <img 
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
            className="m-auto" />
        <div className='flex flex-col text-center'>
            <span>
                Maxima: {parseInt(data.main.temp_max - difKelvin)}°C
            </span>
            <span>
                Minima: {parseInt(data.main.temp_min - difKelvin)}°C
            </span>
        </div>
    </div>
  )
}
