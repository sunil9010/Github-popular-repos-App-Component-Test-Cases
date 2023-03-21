// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    imageUrl,
    name,
    starsCount,
    forksCount,
    issuesCount,
  } = repositoryDetails
  return (
    <li className="repository-item">
      <img src={imageUrl} alt={name} className="repository-image" />
      <h1 className="repository-name">{name}</h1>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
          alt="stars"
          className="stats-icon"
        />
        <p className="stats-text">{starsCount} stars</p>
      </div>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
          alt="forks"
          className="stats-icon"
        />
        <p className="stats-text">{forksCount} forks</p>
      </div>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
          alt="open issues"
          className="stats-icon"
        />
        <p className="stats-text">{issuesCount} stars</p>
      </div>
    </li>
  )
}
export default RepositoryItem