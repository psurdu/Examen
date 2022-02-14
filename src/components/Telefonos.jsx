import React from "react";
import { Container, Table } from "react-bootstrap";

export default class Telefonos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    async componentDidMount() {
        const response = await fetch(this.props.url);
        const responseData = await response.json();

        this.setState({
            data: responseData.data.phones,
        })
    }

    render() {
        return (
            <Container>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Marca</th>
                            <th>Modelo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((item) => {
                            return (
                                <tr>
                                    <td>{item.phone_name}</td>
                                    <td>{item.slug}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container>
        );
    }
}