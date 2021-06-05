import React, {Component} from 'react';
import {Button as Btn} from 'primereact/button';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    definirCor(){        
        const {color} = this.props;
        
        if(color === 'blue'){
            return "#0a2c44";
        }else if(color === 'red'){
            return "#ab0105";
        }else if(color === 'green'){
            //Definir tom de verde
        }
    }
    
    render() {         
        let styleButton = {
            marginBottom:'10px',
            border: this.definirCor(), 
            backgroundColor:this.definirCor(), 
            color: this.props.color ? 'white': undefined
        }

        return ( 
            <div>
                <Btn 
                    label={this.props.label || ""}
                    style={styleButton}  
                    icon={`fa fa-${this.props.icon}` || undefined }                  
                    className="p-button-secondary"
                    onClick={this.props.onClick}
                />
            </div>
         );
    }
}
 
export default Button;