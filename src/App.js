import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './Context/AuthContextProvider';
import { routes } from './Routes/Route';

function App() {
  const { theme } = useContext(AuthContext);
  const ClassName = `bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`;
  return (
    <div className={ClassName}>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
