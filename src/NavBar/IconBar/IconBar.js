import React, { Component } from 'react';



class IconBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            icon: '',
            
            //classToUse: '`top-menu ${this.state.menu_class}`',
        }
        
    }



    setIconHamburger = () => {
        if (this.state.icon === '') {
            this.setState({
                icon: 'is-active',
            })
        } else {
            this.setState({
                icon: '',
            })
        }
    }

    render = () => {
        let icon_hamburger =`hamburger hamburger--slider ${this.state.icon}` ;
        

        return (
            <div>
                
                    
              





<div className={icon_hamburger} onClick={this.setIconHamburger}>
  <div class="hamburger-box">
    <div class="hamburger-inner"></div>
  </div>
</div>
                            
               
             


            </div>
            
        )
    }
}

export default IconBar; 

