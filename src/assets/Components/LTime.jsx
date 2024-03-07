import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
function LTime({ timeZone }) {
  const [warudo, zaWarudo] = useState(DateTime.local());

  useEffect(() => {
    setInterval(() => {
      zaWarudo(DateTime.local().setZone(timeZone));
    }, 1000);
  }, [timeZone]);
  const CurrentTime = warudo.toLocaleString(DateTime.TIME_WITH_SECONDS);
  return (
    <div id="LC">
 
      <div id="Time">Her:&nbsp;{CurrentTime}

      </div>
    </div>
  );
}

export default LTime;
