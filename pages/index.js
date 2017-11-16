import React from 'react';
//import alias from library is one way to think of this
import Link from 'next/link';

//ES6 version instead of React.CreateComponent
class Index extends React.Component {
    //Do I need this if this is the parent component? I.e. index
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div classname ="hello-world">
                {/*A example of a JSX comment*/}
                {/*Make sure you name the tag the same as the alias 
                that is declared in your import statement*/}
                <Link classname="hello-text"
                      href="/nextlink"> 
                <a> Click me! </a>
                </Link>
            </div>
        )//end return method of render
    }//end Index render method 
}//end Index react class declaration 

export default Index