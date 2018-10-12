import React, {Component  } from 'react'

class Nav extends Component{
    render(){
        return(
            <div className='navBar'>
                <img className='logo' src="https://camo.githubusercontent.com/627c774e3070482b180c3abd858ef2145d46303b/68747470733a2f2f656c656374726f6e6a732e6f72672f696d616765732f656c656374726f6e2d6c6f676f2e737667" alt=""/>
                <ul className='navList'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Files</li>
                </ul>
                
            </div>
        )
    }
}

export default Nav
