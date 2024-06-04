import Form from 'react-bootstrap/Form';
import './../styles/components/layout/FormularioContacto.css';
import { useState } from 'react'
import axios from 'axios';

const FormularioContacto = (props) => {

  const initialForm = {
    nombre: '',
    mail: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm)
    }
  }


  return (
    <div className='ContenedorForm' style={{ marginTop: '90px' }}>
      <div className='formularioHome'>
        <form
          action='/contacto'
          method='post'
          onSubmit={handleSubmit}
          className='formulario'>
          <h2 className='text-center'>Contáctanos!</h2>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control
              className='text-center'
              type="text"
              placeholder="Nombre"
              name='nombre'
              value={formData.nombre}
              onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control
              className='text-center'
              type=""
              placeholder="Ingrese su correo electrónico"
              name='mail'
              value={formData.mail}
              onChange={handleChange} />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className='text-center'>Consulta</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              name='mensaje'
              value={formData.mensaje}
              onChange={handleChange} />
          </Form.Group>
          <p className='acciones text-center'><input type='submit' value='Enviar' className='button-contacto' /></p>
        </form>
        {sending ? <p>Enviando...</p> : null}
        {msg ? <p>{msg}</p> : null}

      </div>
    </div>
  );
}

export default FormularioContacto;