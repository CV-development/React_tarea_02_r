import React from 'react'

const SocialButton = ({ icon }) => {
  return (
    <div className='icon-container border border-black rounded-circle py-1 px-2'>
      <i className={icon} />
    </div>
  )
}

export default SocialButton
