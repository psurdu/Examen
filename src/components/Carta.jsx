import React from "react";
import { Card,ListGroup,ListGroupItem } from "react-bootstrap";



export default class Carta extends React.Component {
    constructor(props) {
        super(props);
        
        this.state={
            data:[],
            urlimagen:'',
            url:'',
        }
    }

    async componentDidMount(){
        const response= await fetch("https://api-mobilespecs.azharimm.site/v2/brands/"+this.props.brand_slug);
        const responseData= await  response.json();
        
        this.setState({
            data: responseData.data,
            urlimagen: responseData.data.phones[0].image,
        })
    }

    render(){
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.urlimagen} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                </Card.Body>
              </Card>
        );
    }
}