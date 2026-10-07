import Encabezado from './components/Encabezado'
import Mensaje from './components/Mensaje'
import Perfil from './components/Perfil'

function App() {
  return (
    <div className='app'>
      <Encabezado />
      <Perfil
        nombre='Leo'
        programa='Desarrollo de Software'
        ciudad='Barinas'
      />
      <Mensaje mensaje='Welcome to Jaguarsic Park' />
    </div>
  )
}

export default App
