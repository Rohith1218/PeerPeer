import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Login from './components/Authentication/Login';
import Registration from './components/Authentication/Registration';
import ForgotPassword from './components/Authentication/ForgotPassword';
import Overview from './components/Dashboard/Overview';
import QuickLinks from './components/Dashboard/QuickLinks';
import ProfileSettings from './components/Dashboard/ProfileSettings';
import SearchFilters from './components/TutorSearch/SearchFilters';
import TutorProfiles from './components/TutorSearch/TutorProfiles';
import SessionScheduling from './components/SessionManagement/SessionScheduling';
import Confirmation from './components/SessionManagement/Confirmation';
import SessionHistory from './components/SessionManagement/SessionHistory';
import FeedbackForm from './components/Feedback/FeedbackForm';
import PaymentManagement from './components/Payment/PaymentManagement';
import ContactForm from './components/Contact/ContactForm';

function App() {
  return (
    <BrowserRouter>
    <ul className='nav'>
        {!localStorage.getItem("loggedIn") && (<li className="nav-item"><Link to="/login">Login</Link></li>)}
        {/* <li><Link to="/registration">Registration</Link></li> */}
        {localStorage.getItem("loggedIn") && (
        <>
        <li className="nav-item"><Link to="/login">Logout</Link></li>
        <li className="nav-item"><Link to="/">Overview</Link></li>
        {/* <li><Link to="/quick-links">Quick Links</Link></li> */}
        {/* <li><Link to="/profile-settings">Profile Settings</Link></li> */}
        {/* <li><Link to="/search-filters">Search Filters</Link></li> */}
        <li className="nav-item"><Link to="/tutor-profiles">Tutor Profiles</Link></li>
        <li className="nav-item"><Link to="/session-scheduling">Session Scheduling</Link></li>
        {/* <li><Link to="/confirmation">Confirmation</Link></li> */}
        {/* <li><Link to="/session-history">Session History</Link></li> */}
        {/* <li><Link to="/feedback-form">Feedback Form</Link></li> */}
        <li className="nav-item"><Link to="/payment-management">Payment Management</Link></li>

        </>)
        }
      </ul>
      {/* <Header /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Overview />} />
        <Route path="/quick-links" element={<QuickLinks />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
        <Route path="/search-filters" element={<SearchFilters />} />
        <Route path="/tutor-profiles" element={<TutorProfiles />} />
        <Route path="/session-scheduling" element={<SessionScheduling />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/session-history" element={<SessionHistory />} />
        <Route path="/feedback-form" element={<FeedbackForm />} />
        <Route path="/payment-management" element={<PaymentManagement />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
