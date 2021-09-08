import React from 'react';

const Congratulation = (win: boolean, mistakes?: number): JSX.Element | void => {

  if (win) {
    return (
      <div>
        <div>Yay! Good job! </div>
        <img src='./public/images/success.png'></img>
      </div >
    )
  }
  else {
    return (
      <div>
        <div>You did {mistakes} errors.</div>
        <img src={'/public/images/failure.png'}></img>
      </div >
    )
  }
}

export default Congratulation;
