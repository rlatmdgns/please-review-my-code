import CreateReview from 'domain/CreateReview';
import { Route, Routes } from 'react-router-dom';
import Feed from './domain/Feed';
import Detail from './domain/Detail';
import AuthProvider from './utils/firebase/auth/authProvider';
import { Honor } from './domain/Honor';
import { HonorDetail } from './domain/Honor/HonorDetail';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Feed />}></Route>
        <Route path="/createReview" element={<CreateReview />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/honor" element={<Honor />}></Route>
        <Route path="/honor/:id" element={<HonorDetail />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
