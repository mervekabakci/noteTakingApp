import './App.css'

export default function App() {

  return (
    <>
      <h1>Note Taking</h1>
      <button className='fixBtn button-secondary'>Gonder</button>

      <Login />
    </>
  )
}

function Login() {
  return (
    <>
      <form>
        <p><input type="text" placeholder='ad' /></p>
        <p><input type="text" placeholder='soyad' /></p>
        <button>Giriş</button>
      </form>
    </>
  )
}