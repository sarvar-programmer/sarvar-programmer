import { Component } from "react";
import {Table,Row,Col,Button} from "react-bootstrap";

export default class MyComputers extends Component{
    render(){
        return <>
            <Row className="mt-4">
                <Col md={12} className="text-rigt">
                     <Button variant="success" onClick={this.props.openModal}>Add</Button>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={12}>
                    <h1>My Compyters</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Name</th>
                                <th>protsessor</th>
                                <th>Ram</th>
                                <th>SSD</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.list.map((item,index) => 
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.protsessor}</td>
                                        <td>{item.ram}</td>
                                        <td>{item.ssd}</td>
                                        <td>
                                            <Button variant={"danger"} onClick={()=>this.props.removeBtn(index)}>
                                                remove
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    }
}