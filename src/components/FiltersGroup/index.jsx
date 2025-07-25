import './index.css'
const FiltersGroup = (props) => {
    const {shelf,changeCategory,isActive} = props
    const {value, label} = shelf
    const onClickLabel = () => {
        changeCategory(value)

    }
      const pClass = isActive ? 'active-tab-btn' : 'tab-btn'

    return(
        <li className='list-item'>
         
         <p className={pClass} onClick={onClickLabel}>{label}</p> 
        </li>
    )
        
        
        

    
    
}
export default FiltersGroup