import React from 'react'

import Contact from './Contact'

class Contacts extends React.Component {
  render() {
    let { contacts } = this.props
    contacts.forEach((c) => console.log(c))
    return (
      <div className="container">
        <section className="contacts">
          <article className="contact">
            <span className="contact__avatar" />
            <span className="contact__data">Nome</span>
            <span className="contact__data">Telefone</span>
            <span className="contact__data">País</span>
            <span className="contact__data">Admissão</span>
            <span className="contact__data">Empresa</span>
            <span className="contact__data">Departamento</span>
          </article>
          {contacts.map((contact) => (
            <Contact key={contact.id} data={contact} />
          ))}
        </section>
      </div>
    )
  }
}

export default Contacts
