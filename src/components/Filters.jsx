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

          <button className="filters__item is-selected">
            Nome <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item">
            País <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item">
            Empresa <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item">
            Departamento <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item">
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </div>
    )
  }
}

export default Filters
