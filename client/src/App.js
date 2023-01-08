import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import AppRoutes from './route';
import Loading from './component/Loading/Loading';

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (

    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
