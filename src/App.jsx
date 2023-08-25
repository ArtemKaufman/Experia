import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Dashbord } from './pages/Dashbord';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashbord />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
