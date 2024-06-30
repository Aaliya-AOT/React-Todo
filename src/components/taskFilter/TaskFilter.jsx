import React from 'react'
import InputField from '../../sharedComponents/InputField'
import searchIcon from '../../assets/search-icon.svg'
import './TaskFilter.css'
import DropDown from '../../sharedComponents/DropDown'

function TaskFilter({onSearch,onSort}) {

  //function for the change occuring in search box, retrieves the search box value and passes it to onSearch fn
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };
  const handleSortChange = (event) =>{
    onSort(event.target.value);
  }
  return (
    <div className='task-filter'>
      <div className='search-task'>
        <InputField inputType={'text'} inputId={'search-bar'} inputPlaceholder={'Search by task name'} onChange={handleSearchChange}/> 
        <img src={searchIcon}></img>
      </div>
      <div className='sort-task'>
        <span className="sort-label">Sort By :</span>
        <DropDown onChange={handleSortChange}/>
      </div>
    </div>
  )
}

export default TaskFilter
