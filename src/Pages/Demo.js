// type rfce to get func compt code snippet
import React from 'react'

// this username comes from parent and destructuring occurs here
function Demo({ username, isStatus }) {
  console.log(username);

  return (
    <div>
      <div>
        <h1>Demo</h1>
        {username ? <h6>Data from App.js to Demo.js = {username} and {isStatus} </h6> : ''}
      </div>
    </div>
  )
}

export default Demo