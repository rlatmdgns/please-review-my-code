import CreateReview from 'domain/CreateReview';
import { Routes, Route } from 'react-router-dom';
import Feed from './domain/Feed';
import Detail from './domain/Detail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Feed />}></Route>
      <Route path="/createReview" element={<CreateReview />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
    </Routes>
  );
}

export default App;
