import './App.css';
import { Header } from './components';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { Bio } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          exact
          path='/bio'
          element={<Bio />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
