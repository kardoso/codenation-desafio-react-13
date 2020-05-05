import React from 'react'

class Contact extends React.Component {
  render() {
    const {
      name,
      phone,
      country,
      admissionDate,
      company,
      department,
      avatar,
    } = this.props.data
    return (
      <article className="contact">
        <span className="contact__avatar">
          <img src={avatar} alt="UserAvatar" />
        </span>
        <span className="contact__data">{name}</span>
        <span className="contact__data">{phone}</span>
        <span className="contact__data">{country}</span>
        <span className="contact__data">
          {new Date(admissionDate).toLocaleDateString('pt-BR')}
        </span>
        <span className="contact__data">{company}</span>
        <span className="contact__data">{department}</span>
      </article>
    )
  }
}

export default Contact
