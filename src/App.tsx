import { Routes, Route } from 'react-router-dom';
import { Feed } from './pages/Feed';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Feed />}></Route>
      {/* <Route path='/detail' element={<Detail />}></Route> */}
    </Routes>
  );
}

export default App;
