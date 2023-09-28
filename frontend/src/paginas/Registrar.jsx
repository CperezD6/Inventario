import {Link} from 'react-router-dom'
import {useState} from 'react'
import Alerta from '../components/Alerta'

const Registrar = () => {
  const [nombre, setNombre]= useState('')
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [repetirPassword, setRepetirPassword]= useState('')
  const [alerta, setAlerta] = useState('')

  const handleSubmit = e =>{
    e.preventDefault()
    if([nombre, email, password, repetirPassword].includes("")){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }
    if(password !== repetirPassword ){
      setAlerta({
        msg: 'Los Password no son iguales',
        error: false
      })
    }
    if(password.length < 6 ){
      setAlerta({
        msg: 'La contrasena debe ser mayor a 6 caracteres',
        error: false
      })
    }
    setAlerta({})
    //Crear al Usuario en la API
    try {
      
    } catch (error) {
      
    }
  }

  const {msg} = alerta

  return (
    
      <>
      <h1 className='text-blue-500 font-black text-5xl capitalize text-center'>Crear cuenta</h1>

      {msg && <Alerta alerta={alerta}/>}

      <form action="" 
        className='my-10 bg-white shadow rounded-xl roun px-10 py-1'
        onSubmit={handleSubmit}
      >
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
            value={nombre}
            onChange={e => setNombre(e.target.value)}
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
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            value={password}
            onChange={e => setPassword(e.target.value)}
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
            value={repetirPassword}
            onChange={e => setRepetirPassword(e.target.value)}
            />
        </div>
        <input 
          type="submit"
          value="Crear Cuenta" 
          className='bg-sky-700 w-full py-3 text-white uppercase font-bold rounded-lg hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5  '
          
          />
          
      </form>
      <nav className='lg:flex lg:justify-between'>
          {/* <Link 
            className='block text-center my-1 text-slate-500 uppercase text-sm' 
            to="/"
            >Ya tienes una Cuenta?</Link>
      
          <Link 
            className='block text-center my-5 text-slate-500 uppercase text-sm' 
            to="olvide-password"
            >Olvide mi Password</Link> */}
      </nav>
    </>
    
  )
}

export default Registrar
