import './App.css';
import router from './routes/routing';
import { RouterProvider } from 'react-router-dom';

function App() {
  const routing = router
  return (
    <RouterProvider router={router}/>
    // <div>:) 1234</div>
  )
}

export default App;
