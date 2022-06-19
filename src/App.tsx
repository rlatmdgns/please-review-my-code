import CreateReview from 'domain/CreateReview';
import { Routes, Route } from 'react-router-dom';
import Feed from './domain/Feed';
import Detail from './domain/Detail';
import AuthProvider from './utils/firebase/auth/authProvider';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Feed />}></Route>
        <Route path="/createReview" element={<CreateReview />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
