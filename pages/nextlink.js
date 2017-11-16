import React from 'react';
import link from 'next/link';

class nextlink extends React.Component {
    //Do I need this if this is the parent component? I.e. index
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div classname ="hello-world">
                <span> hai </span>
            </div>
        )//end return method of render
    }//end Index render method 
}//end Index react class declaration 

export default nextlink