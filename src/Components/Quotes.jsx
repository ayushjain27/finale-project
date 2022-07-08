import React from 'react'

const Quotes = () => {
    const containerFluid = {
        backgroundColor: 'white',
        height: '250px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    
    const box = {
        backgroundColor: 'brown',
        width: '80%',
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '12px',
        color: 'white',
        wordSpacing: '2px'
    }
    
    const JoinContainer = {
        backgroundColor: 'lightgrey',
        width: '100%',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    
    const Join = {
        backgroundColor: 'brown',
        borderRadius: '12px',
        padding: '2px 16px',
        color: 'white',
    }

  return (
    <>
        <div style={containerFluid} className="container-fluid">
            <div style={box}>AyushJain</div>
        </div>
        <div style={JoinContainer}>
            <div style={Join}>Join Us/Register</div>
        </div>
    </>
  )
}

export default Quotes
