import React from 'react';

const List = () => {
    return (<ul style={listStyle}>
        <li> Html</li>
        <li>CSS</li>
        <li> React</li>
    </ul>)
}
const listStyle = {
    listStyle: 'none',
    color: 'blue',
    fontSize: 20
}
export default List