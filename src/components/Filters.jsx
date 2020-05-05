import React from 'react'

import FilterButton from './FilterButton'

class Filters extends React.Component {
  state = {
    searchString: '',
    activeButtonIndex: null,
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

  orderByString = (property) => {
    const { allContacts, setContacts } = this.props
    const contacts = allContacts.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1
      }
      if (a[property] > b[property]) {
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

  changeButtonIndex = (index) => {
    this.setState({ activeButtonIndex: index })
    console.log(index)
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

          <FilterButton
            index={0}
            isActive={this.state.activeButtonIndex === 0}
            onClick={() => {
              this.orderByString('name')
              this.changeButtonIndex(0)
            }}
            text="Nome"
          />
          <FilterButton
            index={1}
            isActive={this.state.activeButtonIndex === 1}
            onClick={() => {
              this.orderByString('country')
              this.changeButtonIndex(1)
            }}
            text="País"
          />
          <FilterButton
            index={2}
            isActive={this.state.activeButtonIndex === 2}
            onClick={() => {
              this.orderByString('company')
              this.changeButtonIndex(2)
            }}
            text="Empresa"
          />
          <FilterButton
            index={3}
            isActive={this.state.activeButtonIndex === 3}
            onClick={() => {
              this.orderByString('department')
              this.changeButtonIndex(3)
            }}
            text="Departamento"
          />
          <FilterButton
            index={4}
            isActive={this.state.activeButtonIndex === 4}
            onClick={() => {
              this.orderByAdmissionDate()
              this.changeButtonIndex(4)
            }}
            text="Data de admissão"
          />
        </section>
      </div>
    )
  }
}

export default Filters
