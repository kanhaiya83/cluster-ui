import React from 'react'
import { RotatingSquare } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='p-4 flex w-full justify-center mt-6'>
      <RotatingSquare
  visible={true}
  height="100"
  width="100"
  color="#000"
  ariaLabel="rotating-square-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}

export default Loader