import React from 'react'
// import FullBurger from '../components/FullBurger'
import Link from 'next/link'


const Checkout = async ({params}:{params:Promise<{slug:String[]}>}) => {
  const {slug}=await params;

  if(slug?.length===1){
    return (
    <>
      {/* <FullBurger  /> */}
      <h1>Form for {slug[0]}</h1>
    </>)
  }

  return (
    <div>
      {/* <FullBurger  /> */}

      {/* <button >  click here</button> */}

      <Link href="/checkout/contact-data">confirm</Link>
    </div>
  )
}


export default Checkout