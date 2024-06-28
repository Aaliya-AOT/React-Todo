import React from 'react'

function DropDown() {
    const dropdownStyle={
        maxWidth: "156px",
        width: "100%",
        borderRadius: "5px",
        padding: "10px 14px",
        border: "1px solid #CECECE",
        color: "#282829",
        fontWeight: "600",
        fontSize: "16px",
    }
  return (
    <select style={dropdownStyle} name="sort-dropdown" id="sort-dropdown">
        <option value="Newest First">Newest First</option>
        <option value="Oldest First">Oldest First</option>
    </select>
  )
}

export default DropDown