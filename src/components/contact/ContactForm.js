import React from 'react';
import { Form, Button, Col, } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { TextResponsive, } from '../shared components/styledComponents';

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      email: null,
      telephone: null,
      company: null,
      message: null,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const dataContact = this.state;
    console.log(dataContact);
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const { t } = this.props;
    const { name, email, telephone, company, message, } = this.state;

    return (
      <Form style={formStyle} className="mx-auto my-5" onSubmit={this.handleSubmit}>
        <Form.Row className="ml-1">
          <TextResponsive largeHeight="40px" normalHeight="30px" smallHeight="25px" className="mb-3">
            {t('contactForm.title')}
          </TextResponsive>
        </Form.Row>
        <Form.Row>
          <Col xs={12} md={4}>
            <Form.Control type="text" placeholder={t('contactForm.form.name')} name="name" size="sm" className="mb-2"
              onChange={this.handleInputChange} />
            <Form.Control type="email" placeholder={t('contactForm.form.email')} name="email" size="sm" className="mb-2"
              onChange={this.handleInputChange} />
            <Form.Control type="text" placeholder={t('contactForm.form.telephone')} name="telephone" size="sm" className="mb-2"
              onChange={this.handleInputChange} />
            <Form.Control type="text" placeholder={t('contactForm.form.company')} name="company" size="sm" className="mb-2"
              onChange={this.handleInputChange} />
          </Col>
          <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
            <Form.Control as="textarea" placeholder={t('contactForm.form.consultation')} name="message" size="sm" className="mb-2 h-100"
              onChange={this.handleInputChange} />
          </Col>
        </Form.Row>
        <Form.Row className="justify-content-end">
          <Button variant="outline-secondary" type="submit" size="sm" className="mr-1">
            {t('contactForm.form.button')}
          </Button>
        </Form.Row>
      </Form>
    )
  }


}

export default withTranslation('translations')(ContactForm)

const formStyle = {
  maxWidth: "700px",
  margin: "1000px !important",
  width: "90%",
}
