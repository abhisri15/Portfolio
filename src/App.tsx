import React from 'react';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-dark-50 dark:via-dark-100 dark:to-dark-200 transition-all duration-500">
      <ScrollToTop />
      <main className="flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-7xl">
          <HomePage />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;