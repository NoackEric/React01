import React from 'react';

const MickeyName = 'Micky'
const MineyName = 'Miney'
const Name = () =>{
return (<h1 style={styleName}> {MickeyName} {MineyName} Mouse</h1>)
}

const styleName = {
    color: '#333',
    fontSize: 50
}
export default Name