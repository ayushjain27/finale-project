import React from 'react'

const Quote = () => {
    const style = {
        display: 'flex',
        justifyContent: 'center', 
        backgroundColor: 'lightgray',
        wordSpacing: '12px',
    }

    const style1 = {
        color: 'white',
        marginLeft: '5px',
    }
    
    const style2 = {
        color: 'red',
        marginLeft: '5px',
        
    }

    return (
        <div style={style}>
            <span style={style1}>A</span>
            <span style={style2}>STEP</span>
            <span style={style1}>TO</span>
            <span style={style2}>IMPROVE</span>
            <span style={style1}>THE</span>
            <span style={style2}>LIVES</span>
            <span style={style1}>OF</span>
            <span style={style2}>POOR</span>
            {/* A STEP TO IMPORVE THE LIVES OF POOR */}
        </div>
    )
}

export default Quote
