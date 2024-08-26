import React from 'react'

function History() {
  return (
    <>
    <div className='p-5'>
      <h1>Watch History</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Video ID</th>
            <th>Title</th>
            <th>Video URL</th>
            <th>Date And Time</th>
            <th></th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>1</td>
            <td>Heeriye</td>
            <td style={{cursor:'pointer'}}>https://www.youtube.com/embed/RLzC55ai0eo</td>
            <td>2024-08-24</td>
            <td>
              <button className='btn'>
              <i className="fa-solid fa-trash" style={{color: "#6a110b"}}/>

              </button>
            </td>
          </tr>
        </tbody>

      </table>

    </div>
    </>
  )
}

export default History