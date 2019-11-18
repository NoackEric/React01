import React from 'react';
const Greeting= () => {
    const date = new Date()
    const hour = date.getHours()
    if( hour < 12 ){
        return (<h2>Good Morning </h2>  );
    }else if( hour > 12 && hour <= 18){
        return (<h2>Good Afternoon </h2>  );
    }else{
        return (<h2>Good Evening </h2>  );
    }
    
}
 
export default Greeting;