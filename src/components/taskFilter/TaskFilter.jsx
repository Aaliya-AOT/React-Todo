import React from 'react'
import InputField from '../../sharedComponents/InputField'
import searchIcon from '../../assets/search-icon.svg'
import './TaskFilter.css'
import DropDown from '../../sharedComponents/DropDown'

function TaskFilter() {
  return (
    <div className='task-filter'>
      <div className='search-task'>
        <InputField inputType={'text'} inputId={'search-bar'} inputPlaceholder={'Search by task name'}/> 
        <img src={searchIcon}></img>
      </div>
      <div className='sort-task'>
        <span className="sort-label">Sort By :</span>
        <DropDown/>
      </div>
    </div>
  )
}

export default TaskFilter
