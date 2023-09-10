import {Link} from 'react-router-dom'

const Registrar = () => {
  return (
    
      <>
      <h1 className='text-blue-500 font-black text-5xl capitalize'>Crea tu cuenta</h1>

      <form action="" className='my-10 bg-white shadow rounded-xl roun px-10 py-5'>
        <div className='my-5'>
          <label 
            className='uppercase text-gray-600 block text-xl font-bold '
            htmlFor='nombre'
            >Nombre</label>
          <input 
            id='nombre'
            type="Nombre"  
            placeholder='Nombre'
            className=" w-full border-2 border-sky-500 mt-3 p-2 rounded-xl bg-gray-50"
            />
        </div>
        <div className='my-5'>
          <label 
            className='uppercase text-gray-600 block text-xl font-bold '
            htmlFor='email'
            >Email</label>
          <input 
            id='email'
            type="text"  
            placeholder='Email'
            className=" w-full border-2 border-sky-500 mt-3 p-2 rounded-xl bg-gray-50"
            />
        </div>
        <div className='my-5'>
          <label 
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='password'
            >Password</label>
          <input 
            id='password'
            type="password"  
            placeholder='password'
            className=" w-full border-2 border-sky-500 mt-3 p-2 rounded-xl bg-gray-50"
            />
        </div>
        <div className='my-5'>
          <label 
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='password2'
            >Repetir Password</label>
          <input 
            id='password2'
            type="password"  
            placeholder='Repetir Password'
            className=" w-full border-2 border-sky-500 mt-3 p-2 rounded-xl bg-gray-50"
            />
        </div>
        <input 
          type="submit"
          value="Crear Cuenta" 
          className='bg-sky-700 w-full py-3 text-white uppercase font-bold rounded-lg hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5  '
          
          />
          
      </form>
      <nav className='lg:flex lg:justify-between'>
          <Link 
            className='block text-center my-5 text-slate-500 uppercase text-sm' 
            to="/"
            >Ya tienes una Cuenta?</Link>
      
          <Link 
            className='block text-center my-5 text-slate-500 uppercase text-sm' 
            to="olvide-password"
            >Olvide mi Password</Link>
      </nav>
    </>
    
  )
}

export default Registrar
