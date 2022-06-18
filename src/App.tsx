import CreateReview from 'domain/CreateReview';
import { Routes, Route } from 'react-router-dom';
import Feed from './domain/Feed';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Feed />}></Route>
      <Route path="/createReview" element={<CreateReview />}></Route>
    </Routes>
  );
}

export default App;
