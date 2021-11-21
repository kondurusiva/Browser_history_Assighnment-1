import {Component} from 'react'
import './App.css'
import BrowserHistoryPage from './Components/BrowserHistoryPage'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    historyDetailsList: initialHistoryList,
    yesHistory: true,
  }

  onChangeSearchInput = event => {
    const {searchInput} = this.state
    if (searchInput.length === 0) {
      const changeBoolean = false
      this.setState({
        searchInput: event.target.value,
        yesHistory: changeBoolean,
      })
    } else {
      this.setState({searchInput: event.target.value, yesHistory: true})
    }
  }

  onDeleteHistory = id => {
    const {historyDetailsList, yesHistory} = this.state
    const filteredHistory = historyDetailsList.filter(
      eachHistory => eachHistory.id !== id,
    )
    if (filteredHistory.length === 0) {
      const changeBoolean = !yesHistory
      this.setState({
        historyDetailsList: filteredHistory,
        yesHistory: changeBoolean,
      })
    } else {
      this.setState({historyDetailsList: filteredHistory})
    }
  }

  render() {
    const {searchInput, historyDetailsList, yesHistory} = this.state
    const searchResults = historyDetailsList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const list=

    return (
      <div>
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <label htmlFor="search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png "
              alt="search"
              className="search-icon"
            />
          </label>
          <input
            placeholder="search History"
            className="input-icon"
            id="search"
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
        </div>
        <ul>
          {yesHistory ? (
            searchResults.map(eachHistory => (
              <BrowserHistoryPage
                historyDetails={eachHistory}
                key={eachHistory.id}
                onDeleteHistory={this.onDeleteHistory}
              />
            ))
          ) : (
            <p>There is no history to show</p>
          )}
        </ul>
      </div>
    )
  }
}

export default App
