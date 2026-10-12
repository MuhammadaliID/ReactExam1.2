
import React from 'react'
import { dataUser } from './Store/Zustand'
import { useAtom } from 'jotai'
import {  DeleteUser } from './Store/Jotai'

function Zustand() {
  let data = dataUser((state) => state.data)
  let deleteZustand = dataUser((state) => state.deleteUser)

  let [, deleteJotai] = useAtom(DeleteUser)

  function deleteAll(id) {
    deleteZustand(id)
    deleteJotai(id)
  }

  return (
    <>
      {data.map((elem) => (
        <div key={elem.id}>

          <p> {elem.status ? 'Active' : 'Inactive'}</p>
          <p> {elem.phone}</p>
          <button onClick={() => deleteAll(elem.id)}>Delete</button>
        </div>
      ))}



    </>
  )
}

export default Zustand
