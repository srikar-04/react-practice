import React, { useEffect, useState } from 'react'

function Github() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    setLoading(true)
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then((res) => res.json())
    .then(res => {
      setData(res)
      setLoading(false)
    })
  },[])

  console.log(data);
  

  return (
    <>
      {loading 
      ?
        <div>Loading.....</div>
      : 
      <>
        <div className='p-4 bg-gray-700 text-white text-lg'>Followers : {data.followers
        }</div>
        <div className='p-4 bg-gray-300 flex items-center justify-center '>
          <img className='w-40' src={data.avatar_url} alt="" />
        </div>
      </>

      }
    </>
  )
}

export default Github