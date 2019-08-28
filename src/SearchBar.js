import React, { Component } from 'react'
import serializeForm from 'form-serialize'
//import ImageInput from './utils/ImageInput'
//import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SearchBar extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
    }


    render() {
        return (
            <container>
                <Form onSubmit={this.handleSubmit} controlId='FormSearch'>
                    <Form.Group controlId='group-search-name' as={Row}>
                        <Col sm='4'><Form.Control name='nameSearch' placeholder='Buscar Nome'/></Col>
                        
                        <Button type='button' onclick=''>Buscar Contato</Button>
                        <Col sm='2'/>
                        <Button type='button' onclick=''>Adicionar</Button>

                    </Form.Group>
                </Form>
        
            </container>
        )
    }
}
export default SearchBar;