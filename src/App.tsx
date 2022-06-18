import CreateReview from 'domain/CreateReview';
import { Routes, Route } from 'react-router-dom';
import Feed from './domain/Feed';
import Sample from './domain/Sample';
import AuthProvider from './utils/firebase/auth/authProvider';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/createReview" element={<CreateReview />} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
