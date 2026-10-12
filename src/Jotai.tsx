import { useAtom } from 'jotai'
import React from 'react'
import { DataUser, DeleteUser } from './Store/Jotai'

function Jotai() {
let [data] = useAtom(DataUser)
let [,deleteUser] = useAtom(DeleteUser) 



  return (
   <>
   <div>
  {data.map((user) => (
    <div key={user.id}>
      <h2>{user.name}</h2>
          <img style={{ width: '100px', borderRadius: '50%' }} src={user.avatar} alt=""/>
      
    </div>
  ))}
   </div>
   </>
  )
}

export default Jotai


