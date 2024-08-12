import React,{Component} from "react";
import { Button,Card,Col,Row,Form } from "react-bootstrap";

export default class Modal extends Component{

    state = {
        name : '',
        protsessor : '',
        ram : '',
        ssd : '',
        nameIs : false
    }

    name = ((attr)=> {
        this.setState({
            name : attr.target.value
        })
    })

    protsessor = ((attr)=> {
        this.setState({
            protsessor : attr.target.value
        })
    })

    ram = ((attr)=> {
        this.setState({
            ram : attr.target.value
        })
    })

    ssd = ((attr)=> { 
        let index = attr.nativeEvent.target.selectedIndex
        let item = attr.nativeEvent.target[index].text
        this.setState({
            ssd : attr.target.value
        })
    })

    render() {
        const {name,protsessor,ram,ssd} = this.state
        return (
            <Row>
                <Col md={8}>
                    <Card>
                        <Card.Header>
                            <h1>Add computer</h1>
                        </Card.Header>
                        <Card.Body>
                            {
                                this.state.nameIs ? <input type="text" className="form-control" 
                                placeholder="name" onKeyUp={this.name}/> :
                                <input type="text" className="form-control" placeholder="name" onKeyUp={this.name}/>
                            }
                            <input type="number" className="form-control mt-2" placeholder="protsessor"
                            onKeyUp={this.protsessor}/>
                            <input type="number" className="form-control mt-2" placeholder="ram"
                            onKeyUp={this.ram}/>
                            <Form.Select onChange={this.ssd} defaultValue={"256 gb"} className="mt-2">
                                <option value={"128 gb"} defaultValue={1}>128 gb</option>
                                <option value={"256 gb"}>256 gb</option>
                                <option value={"512 gb"}>512 gb</option>
                                <option value={"1024 gb"}>1024 gb</option>
                            </Form.Select>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="success" onClick={()=>this.props.saveList(name,protsessor,ram,ssd)}>
                                save
                            </Button>
                            <Button variant="danger" onClick={this.props.cancelModal}>cancel</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        )
    }
}