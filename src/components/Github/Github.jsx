import React, { useEffect, useState } from 'react'

function Github() {
   const [data , setData] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/faizU804')
        .then(response => response.json())
        .then(data => setData(data)
        )
    },[])
  return (
    <div className='flex justify-center items-center flex-col'>
    <div className='text-center text-white m-4 bg-gray-600 p-6 rounded duration-500 text-3xl'> Github followers : {data.followers}
     </div>
     <div >
          <img className="rounded-[50%] cursor-pointer" src={data.avatar_url} alt="" />
     </div>
     </div>
  )
}

export default Github
