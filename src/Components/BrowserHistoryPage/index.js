import './index.css'

const BrowserHistoryPage = props => {
  const {historyDetails, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails
  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-container">
      <div>
        <p>{timeAccessed}</p>
      </div>
      <div>
        <img src={logoUrl} alt="logoUrl" />
      </div>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button type="button" onClick={onDelete}>
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
