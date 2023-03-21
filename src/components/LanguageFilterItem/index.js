// Write your code here3
import './index.css'

const LanguageFilterItem = props => {
  const {languageFilterDetails, setActiveLanguageFilterId, isActive} = props
  const {language, id} = languageFilterDetails
  const cssToggle = isActive ? 'button click' : 'button'
  const onToggle = () => {
    setActiveLanguageFilterId(id)
  }
  return (
    <li>
      <button type="button" className={cssToggle} onClick={onToggle}>
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
