//cat > src/App.js << 'EOF'


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import StudentSignUp from './components/StudentSignUp';
import TeacherSignUp from './components/TeacherSignUp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/student" element={<StudentSignUp />} />
          <Route path="/signup/teacher" element={<TeacherSignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;