
import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className={`min-h-screen flex justify-center items-center`}
        style={{background: "linear-gradient(0deg, #1D004D 0%, #6C007D 45%, #450065 75%)"}}>
        <ClipLoader color="#C8A3D6" size={100} />
    </div>
  )
}

export default Loading