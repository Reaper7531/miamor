import React, { useEffect, useState } from 'react';
import './App.css';
import { DateTime } from 'luxon';
import Time from './assets/Components/Time';
import MoonPhaseComponent from './assets/Components/MoonPhaseComponent';

import Navbar from './assets/Components/Navbar';
import LTime from './assets/Components/LTime';
function App() {
  const [moonPhaseDecimal, setmoonPhaseDecimal] = useState(null)
async function getPhase(){
  const dam=await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/lahore?unitGroup=metric&key=BHVB63V2XU6NYUA42AEKGNE4Y&contentType=json')
const data= await dam.json()
const moonLol=data.currentConditions.moonphase
console.log(moonLol)
setmoonPhaseDecimal(moonLol)


}

useEffect(() => {
  getPhase();
  const intervalId = setInterval(() => {
    const now = DateTime.local();
    if (now.hour === 0 && now.minute === 0) {
      getPhase();
    }
  }, 60000); 
  return () => clearInterval(intervalId);

}, []);


  return (
    <>
    <Navbar/>
  

    <Time timeZone="Asia/Kolkata" />
  
      <MoonPhaseComponent moonPhaseDecimal={moonPhaseDecimal}/>
      <LTime timeZone="Asia/Karachi" />


    </>
  );
}

export default App;