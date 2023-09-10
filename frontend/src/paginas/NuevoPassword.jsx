import React from 'react'

const NuevoPassword = () => {
  return (
    <>
      <h1 className='text-blue-500 font-black text-5xl capitalize'>Reestablece tu Password</h1>

      <form action="" className='my-10 bg-white shadow rounded-xl roun px-10 py-5'>
        
       
        <div className='my-5'>
          <label 
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='password'
            >Nuevo Password</label>
          <input 
            id='password'
            type="password"  
            placeholder='Escribe tu Nuevo Password'
            className=" w-full border-2 border-sky-500 mt-3 p-2 rounded-xl bg-gray-50"
            />
        </div>
       
        <input 
          type="submit"
          value="Guardar Nuevo Password" 
          className='bg-sky-700 w-full py-3 text-white uppercase font-bold rounded-lg hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5  '
          
          />
      </form>
    </>
  )
}

export default NuevoPassword
