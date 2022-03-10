import React from 'react'
import loading from './loading.gif'

function Spinner() {
  return (
    <div>
      
      <div className="spinner text-center my-3">
          <img src={loading} alt="loading..." />
          </div>
      
    </div>
  )
}

export default Spinner;
