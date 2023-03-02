import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  useEffect(() => {
   const Apidata = async () => {
try {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '27cb2164d7msh22d782256abfd09p1f859ejsn5db7d81455b2',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };
  
const response =  await fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', options)

const data = await response.json();
 console.log(data)


} catch (error) {
  console.log(error)
}
   }
  
   Apidata()
  }, [])
  

  return (
    <div className="App">
      Home
<img src="https://images-assets.nasa.gov/video/Apollo%2011%20Introduction/Apollo%2011%20Introduction~thumb.jpg" alt="" />
    </div>
  )
}

export default App
