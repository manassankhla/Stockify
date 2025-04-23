import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Choice from './pages/choice';
import Courses from './pages/courses';
import Beginner from './pages/courses/beginnerGuide/beginner';
import Intermediate from './pages/courses/intermediateGuide/intermediate';  
import Advance from './pages/courses/advanceGuide/advance';
import HowToBuyStock from './pages/courses/how-to-buy/how'; 
import Dashboard from './pages/dasboard/dashboard';
import Navbar from './pages/navbar';
import Footer from './pages/footer';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import PrivateRoute from './pages/privateRoute';
import TransactionPage from './pages/dasboard/transaction';
import HoldingPage from './pages/dasboard/holdingnew';
import About from './pages/navbar pages/about';
import Support from './pages/navbar pages/support';

function App() {
  // 🛡️ Private route config array
  const privateRoutes = [
    { path: "/choice", element: <Choice /> },
    { path: "/courses", element: <Courses /> },
    { path: "/courses/beginner", element: <Beginner /> },
    { path: "/courses/intermediate", element: <Intermediate /> },
    { path: "/courses/advance", element: <Advance /> },
    { path: "/courses/how-to-buy", element: <HowToBuyStock /> },
    { path: "/invest/dashboard", element: <Dashboard /> },
    { path: "/transaction", element: <TransactionPage /> },
    { path: "/holding", element: <HoldingPage /> },
    { path: "/about", element: <About /> },
    { path: "/support", element: <Support /> },
  ];

  return (
    <Router>


      <div>
        <Routes>
          {/* Public Routes (No PrivateRoute wrapper) */}
          <Route path="/" element={<Homepage />} />
          <Route path="/signIn" element={<SignIn onSignInSuccess={(token) => console.log('Sign-in successful, token:', token)} />} />
          <Route path="/signUp" element={<SignUp />} />

          {/* Private Routes using map */}
          {privateRoutes.map(({ path, element }) => (
            <Route 
              key={path}
              path={path}
              element={<PrivateRoute>{element}</PrivateRoute>}
            />
          ))}
        </Routes>
      </div>

      
    </Router>
  );
}

export default App;
