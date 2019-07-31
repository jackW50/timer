import React, { useState } from 'react';

const Timer = (props) => {
  const [sec, setSec] = useState(0);

  function handleClick(e) {
    const newCount = sec + 1

    setSec(newCount);
  }

  return (
    <div>
      <button onClick={handleClick}>Start</button>
      {sec}
    </div>
  )
}
