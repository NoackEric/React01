import React from 'react';
import Card from './Card'

const Grid = () => {
    return ( <article style={gridStyle}>
        <Card linkUrl="https://unsplash.it/400/400" title='pic1'/>
        <Card linkUrl="https://unsplash.it/401/400" title='pic2'/>
        <Card linkUrl="https://unsplash.it/402/401" title='pic3'/>
        <Card linkUrl="https://unsplash.it/401/402" title='pic4'/>
        <Card linkUrl="https://unsplash.it/402/401" title='pic5'/>
        <Card linkUrl="https://unsplash.it/401/400" title='pic6'/>
    </article> );
}
const gridStyle ={
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
}
export default Grid;