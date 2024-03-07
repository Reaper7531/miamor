import React, { useState, useEffect } from "react";

import { DateTime } from "luxon";
function Time({ timeZone }) {
  const [warudo, zaWarudo] = useState(DateTime.local());


useEffect(()=>{
setInterval(()=>{
    zaWarudo(DateTime.local().setZone(timeZone))
},1000)


},[timeZone])
const CurrentTime=warudo.toLocaleString(DateTime.TIME_WITH_SECONDS)
  return (
    <div id="C">  <div id="Time">Him:&nbsp;{CurrentTime}</div>
    <img src='' alt="" />
    </div>
  
  )
}

export default Time