import React, { useState, useEffect } from 'react';
import NewMoon from './Images/newmoon.png';
import WaxingCrescent from './Images/waxingcrescent.png';
 import FirstQuarter from './Images/firstquarter.png';
 import WaxingGibbous from './Images/waxinggibbous.png';
import FullMoon from './Images/fullmoon.png';
 import WaningGibbous from './Images/waninggibbous.png';
import LastQuarter from './Images/lastquarter.png';
 import WaningCrescent from './Images/waningcrescent.png';

const MoonPhaseComponent = ({ moonPhaseDecimal }) => {
  const [moonPhaseText, setMoonPhaseText] = useState('');
  const [moonImage, setMoonImage] = useState(null);

  useEffect(() => {
    // Interpret the decimal value to determine the moon phase
    if (moonPhaseDecimal >= 0 && moonPhaseDecimal < 0.0625) {
      setMoonPhaseText('New Moon');
      setMoonImage(NewMoon);
    } else if (moonPhaseDecimal >= 0.0625 && moonPhaseDecimal < 0.1875) {
      setMoonPhaseText('Waxing Crescent');
      setMoonImage(WaxingCrescent);
    } else if (moonPhaseDecimal >= 0.1875 && moonPhaseDecimal < 0.3125) {
      setMoonPhaseText('First Quarter');
      setMoonImage(FirstQuarter);
    } else if (moonPhaseDecimal >= 0.3125 && moonPhaseDecimal < 0.4375) {
      setMoonPhaseText('Waxing Gibbous');
      setMoonImage(WaxingGibbous);
    } else if (moonPhaseDecimal >= 0.4375 && moonPhaseDecimal < 0.5625) {
      setMoonPhaseText('Full Moon');
      setMoonImage(FullMoon);
    } else if (moonPhaseDecimal >= 0.5625 && moonPhaseDecimal < 0.6875) {
      setMoonPhaseText('Waning Gibbous');
      setMoonImage(WaningGibbous);
    } else if (moonPhaseDecimal >= 0.6875 && moonPhaseDecimal < 0.8125) {
      setMoonPhaseText('Last Quarter');
      setMoonImage(LastQuarter);
    } else if (moonPhaseDecimal >= 0.8125 && moonPhaseDecimal <= 1) {
      setMoonPhaseText('Waning Crescent');
      setMoonImage(WaningCrescent);
    } else {
    
      setMoonPhaseText('Unknown Phase');
      setMoonImage(null);
    }
  }, [moonPhaseDecimal]);
  const moonPhaseStyles = {
    container: {
      textAlign: 'center',  
      fontSize: '18px'
      
    },
    moonImage: {
    
      width: '12rem',
      height: '12rem',
      margin: '0 auto',  
      display: 'block',  
      
    },
    moonPhaseText: {
      marginTop: '1px',  
      color:'white',
    },
  };
  return (
    <div id="moon"  className="mim" style={moonPhaseStyles.container}>
      <div className='mim'>
        {moonImage && (
          <img  className="mim" src={moonImage} alt={`Moon Phase: ${moonPhaseText}`} style={moonPhaseStyles.moonImage} />
        )}
      </div>
      <br />
      <div id='mtext' className="mim" style={moonPhaseStyles.moonPhaseText}>Moon Phase: {moonPhaseText}</div>
    </div>
  );
};

export default MoonPhaseComponent;