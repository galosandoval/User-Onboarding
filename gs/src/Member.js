import React from 'react'

const Member = ({details}) => {
  if(!details){
    return (
      <h2>Working on fetching your data</h2>
    )
  }
  return (
    <div className="member-container">
      <h3>{details.first_name} {details.last_name}</h3>
      <p>{details.email}</p>
    </div>
  )
}

export default Member