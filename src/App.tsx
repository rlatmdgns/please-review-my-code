import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateReview from './domain/CreateReview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<CreateReview />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
