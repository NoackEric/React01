import React from 'react';

const MainPic = () => {
    return (
        <div style={divStyle}>
            <img style={imgStyle} src="https://unsplash.it/800/800" alt="" class="" />
            <br></br>
            <button style={BtnStyle}>Click</button>
        </div>
    )
}
const BtnStyle ={
    padding: '15px 30px' ,
    background: ' blueviolet ',
    borderRadius: '5px'
}
const divStyle ={
    width: '90%',
    margin: '0 auto'
}
const imgStyle={
    margin: '0 auto',
    size: '100%',
    transition: 'all .5s ease-in-out'
}

export default MainPic;