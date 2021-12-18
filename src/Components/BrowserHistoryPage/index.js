import './index.css'

const BrowserHistoryPage = props => {
  const {historyDetails, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails
  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-container">
      <div className="wrap-container">
        <div>
          <p>{timeAccessed}</p>
        </div>
        <div className="logo-container">
          <img className="logo-image" src={logoUrl} alt="domain logo" />
          <p>{title}</p>
        </div>
        <div>
          <p>{domainUrl}</p>
        </div>
      </div>
      <div>
        <button
          className="btn-container"
          testid="delete"
          type="button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistoryPage
