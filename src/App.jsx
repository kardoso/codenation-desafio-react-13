import React from 'react'

import './App.scss'

import Topbar from './components/Topbar'
import Filters from './components/Filters'
import Contacts from './components/Contacts'

const apiURL = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts'

class App extends React.Component {
  state = {
    allContacts: [],
    filteredContacts: [],
  }

  componentDidMount() {
    this.getInitialData()
  }

  getInitialData = async () => {
    await fetch(apiURL)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState(() => ({ allContacts: data, filteredContacts: data }))
      })
  }

  setContacts = (contacts) => {
    this.setState(() => ({ filteredContacts: contacts }))
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters
          allContacts={this.state.allContacts}
          filteredContacts={this.state.filteredContacts}
          setContacts={this.setContacts}
        />
        <Contacts contacts={this.state.filteredContacts} />
      </React.Fragment>
    )
  }
}

export default App
