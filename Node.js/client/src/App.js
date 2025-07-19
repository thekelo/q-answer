import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/Home';
import QuestionPage from './pages/Question';
import AskQuestionPage from './pages/AskQuestion';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/question/:id" element={<QuestionPage />} />
          <Route path="/ask" element={<AskQuestionPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
