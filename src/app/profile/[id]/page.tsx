import React from 'react'

const Personalprofile = ({params}:any) => {
  return (
    <div className=' flex text-center justify-center '>
        profile page
        <span className='mx-10'>{params.id}</span>
    </div>
  )
}

export default Personalprofile