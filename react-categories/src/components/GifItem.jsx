import React from 'react'

function GifItem({title, url}) {
  return (
    <div className='card'>
        <img src={url} alt={title} />
    </div>
  )
}

export default GifItem