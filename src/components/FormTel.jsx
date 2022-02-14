import React from "react";
import { Button } from "react-bootstrap";
import {v4 as uuid} from "uuid";

export default class FormTel extends React.Component{
    constructor(props){
        super(props);

        this.state={
            data:[],
        }

        this.marca=React.createRef();

        this.generateURL=this.generateURL.bind(this);
    }

    async componentDidMount(){
        const response= await fetch(this.props.url);
        const responseData= await  response.json();
        
        this.setState({
            data: responseData.data,
        })
    }

    generateURL(){
        this.props.url='https://api-mobilespecs.azharimm.site/v2/brands/'+this.marca.current.value;
    }

    render(){
        return(
            <div>
                <form>
                    <select ref={this.marca}> 
                        {this.state.data.map((item)=>{
                            return(<>
                            <option key={uuid} value={item.brand_slug}>{item.brand_name}</option>
                            </>);
                        })}
                    </select>
                    <Button onClick={()=>this.generateURL()}>Buscar</Button>
                </form>
            </div>
        );
    }
}