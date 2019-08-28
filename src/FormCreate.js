import React, { Component } from 'react'
import serializeForm from 'form-serialize'
//import ImageInput from './utils/ImageInput'
//import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

 class FormCreate extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        if (this.props.onAdicionarContato)
        this.props.onAdicionarContato(values)
    }
  render() {
    return (
    <container>
                <Form onSubmit={this.handleSubmit} controlId='FormCreate'>
                    <Form.Group controlId='group-name' as={Row}>
                        <Form.Label column sm='2'>Nome</Form.Label>                        
                        <Col sm='10'><Form.Control name='name' placeholder='Nome'/></Col>
                    </Form.Group>
                    <Form.Group controlId='group-email' as={Row}>
                        <Form.Label column sm='2'>Email</Form.Label>
                        <Col sm='10'><Form.Control name='email' type='email 'placeholder='Email'/></Col>
                    </Form.Group>
                    <Button type='submit'>Adicionar</Button>            
                </Form>
        
   </container>
   )
 }
}
export default FormCreate;
