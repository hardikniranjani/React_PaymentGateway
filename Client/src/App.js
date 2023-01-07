import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home';
import { useAuth0 } from "@auth0/auth0-react";
// import Route from './route';
import Loading from './component/Loading/Loading';

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log("user",user)
  if (isLoading) {
    // return <div>Loading Please wait...</div>;
    return <Loading />;
  }
  return (

    <div className="App">
      <HomePage />
      {/* <Route /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
