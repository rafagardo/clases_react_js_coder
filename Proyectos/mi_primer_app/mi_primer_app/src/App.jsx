import './App.css'

function App() {

  const titulo = "Clase 3 - JSX";

  const userFavoriteColor = "rgb(200, 50, 100)";

  function userGreetings(name) {
    const saludo = `Hola ${name}, bienvenido a mi App!`;
    return saludo;
  }

  function isUserLoggedIn() {
    return false;
  }

  function logIn() {
    alert('Logueado!');
  }

  // React.fragment is a special tag that allows us to return multiple elements
  // without having to wrap them in a div (<>...</>)
  return (
    <>
      <h1>{titulo}</h1>

      <div className="card">
        <p>
          {userGreetings('Juan')}
        </p>
      </div>

      <p className="read-the-docs">
        Hola React ya instalé Vite!
      </p>
      <button
        onClick={logIn}
        disabled={isUserLoggedIn()}
        style={{backgroundColor: userFavoriteColor,
                      color: 'white',
                      padding: '10px',
                      borderRadius: '5px',
                      border: 'none',
                      textTransform: 'uppercase'
      }}>
        Boton color rojo y con estilos
      </button>
    </>
  )
}

export default App
