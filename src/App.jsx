import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Explore from './pages/Explore';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import './styles/general.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import HouseContract from "./pages/HouseContract";
import DocumentOfOwnership from "./pages/DocumentOfOwnership";
import Profile from "./pages/Profile";
import Construction from "./pages/Construction";
import ConstructionWriteup from "./pages/ConstructionWriteup";
import Gallery from "./pages/Gallery";
import HousePlan from "./pages/HousePlan";
import InPersonPayment from "./pages/InPersonPayment";
import ConfirmOnlinePayment from "./pages/ConfirmOnlinePayment";
import PaymentInterim from "./pages/PaymentInterim";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/explore' element={<Explore />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/policy' element={<PrivacyPolicy />}/>
        <Route path='/terms' element={<Terms />}/>
        <Route path='/contract' element={<HouseContract />}/>
        <Route path='/owner' element={<DocumentOfOwnership />}/>
        <Route path='/construction' element={<Construction/>}/>
        <Route path='/con-write-up' element={<ConstructionWriteup/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/house-plan' element={<HousePlan/>}/>
        <Route path='/pay-in-person' element={<InPersonPayment/>}/>
        <Route path='/pay-online' element={<ConfirmOnlinePayment/>}/>
        <Route path='/pay-interim' element={<PaymentInterim/>}/>
        <Route path='/edit-profile' element={<EditProfile/>}/>
      </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
