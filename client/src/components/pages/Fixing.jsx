import React from 'react'
import fixing from '../../assets/svg/fixing.svg';
import Heading1 from '../utils/Heading1';

function Fixing() {
  return (
    <div className='space-y-10 text-center'>
      <img src={fixing} alt="Fixing" className='w-1/3 mx-auto' />
      <Heading1 text={'We are working on it. Kindly visit us later...'}></Heading1>
    </div>
  )
}

export default Fixing
