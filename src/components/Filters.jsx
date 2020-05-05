import React from 'react'

class Filters extends React.Component {
  state = {
    searchString: '',
  }

  filterBySearch = (e) => {
    e.persist()
    const inputValue = e.target.value
    this.setState(() => ({
      searchString: inputValue,
    }))

    const { allContacts, setContacts } = this.props

    const filteredContacts = allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(inputValue.toLowerCase())
    )

    setContacts(filteredContacts)
  }

  orderByName = () => {
    const { allContacts, setContacts } = this.props
    const contacts = allContacts.sort(function (a, b) {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })

    setContacts(contacts)
  }

  orderByCountry = () => {
    const { allContacts, setContacts } = this.props
    const contacts = allContacts.sort(function (a, b) {
      if (a.country < b.country) {
        return -1
      }
      if (a.country > b.country) {
        return 1
      }
      return 0
    })

    setContacts(contacts)
  }

  orderByCompany = () => {
    const { allContacts, setContacts } = this.props
    const contacts = allContacts.sort(function (a, b) {
      if (a.company < b.company) {
        return -1
      }
      if (a.company > b.company) {
        return 1
      }
      return 0
    })

    setContacts(contacts)
  }

  orderByDepartment = () => {
    const { allContacts, setContacts } = this.props
    const contacts = allContacts.sort(function (a, b) {
      if (a.department < b.department) {
        return -1
      }
      if (a.department > b.department) {
        return 1
      }
      return 0
    })

    setContacts(contacts)
  }

  orderByAdmissionDate = () => {
    const { allContacts, setContacts } = this.props
    const contacts = allContacts.sort(function (a, b) {
      return new Date(b.admissionDate) - new Date(a.admissionDate)
    })

    setContacts(contacts)
  }

  render() {
    return (
      <div className="container">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              value={this.state.searchString}
              onChange={(e) => this.filterBySearch(e)}
            />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>

          <button
            className="filters__item is-selected"
            onClick={this.orderByName}
          >
            Nome <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item" onClick={this.orderByCountry}>
            País <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item" onClick={this.orderByCompany}>
            Empresa <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item" onClick={this.orderByDepartment}>
            Departamento <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item" onClick={this.orderByAdmissionDate}>
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </div>
    )
  }
}

export default Filters
