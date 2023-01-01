import './index.css'

const Application = props => {
  const {eachApplication, deleteApp} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachApplication

  const onDelete = () => {
    deleteApp(id)
  }
  return (
    <li className="main-div">
      <div className="sub-div">
        <p className="time">{timeAccessed}</p>
        <img className="icon-image" src={logoUrl} alt="domain logo" />
        <p className="main-heading">
          {title}
          <p className="main-heading-sub">{domainUrl}</p>
        </p>
      </div>
      <div>
        <button onClick={onDelete} className="delete-icon" type="button">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default Application
