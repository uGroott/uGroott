import React, { useState } from 'react';
import { GraduationCap, School } from 'lucide-react';
import LoginModal from './components/LoginModal';
import ResultCard from './components/ResultCard';
import { students, type Student } from './data/students';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null);
  const [error, setError] = useState('');

  const handleLogin = (username: string, password: string) => {
    const student = students.find(
      (s) => s.rollNumber === username && s.password === password
    );

    if (student) {
      setCurrentStudent(student);
      setIsLoginOpen(false);
      setError('');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setCurrentStudent(null);
    setIsLoginOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <School className="text-indigo-600" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  University Results Portal
                </h1>
                <p className="text-sm text-gray-600">Semester End Examination Results</p>
              </div>
            </div>
            {currentStudent && (
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onLogin={handleLogin}
        />

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {currentStudent && <ResultCard student={currentStudent} />}

        {!currentStudent && !isLoginOpen && (
          <div className="text-center">
            <button
              onClick={() => setIsLoginOpen(true)}
              className="px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Login to View Results
            </button>
          </div>
        )}
      </main>

      <footer className="bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-500 text-sm">
            © 2024 University Results Portal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;