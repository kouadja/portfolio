import React from 'react'

const Btn = ({children}) => {
    const style = {
      
    }

    
  return (
    <div  className='btn' >
      <button className="button-64" role="button"><span className="text">{children}</span></button>
    </div>
  )
}

export default Btn
