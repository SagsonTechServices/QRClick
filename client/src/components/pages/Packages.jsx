import React from 'react'
import PackageCard from '../app/PackageCard'
import Heading1 from '../utils/Heading1'

function Packages() {
  return (
    <div className='grid my-28'>
      <div className='text-center mb-10'>
      <Heading1 text={"Select a tire to continue"}></Heading1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-28 lg:container lg:px-20 px-5">
      <div>
            <PackageCard tire={'Basic'} link={'/packages/basic'} price={0} desc={'You can create a basic QR code for your URL and use it for a lifetime. Genarate your QR Code for free!'} features={['Basic QR code', 'Lifetime access', 'No customization', 'No color theme customization']}></PackageCard>
        </div> 
        <div>
            <PackageCard tire={'Premium'} link={'/packages/premium'} price={99 + ' INR'} desc={'You can create and customize your QR code according to your own brand identity'} features={['Customized QR code', 'Lifetime access', 'Logo customization', 'Color theme customization']}></PackageCard>
        </div>
      </div>
    </div>
  )
}

export default Packages
