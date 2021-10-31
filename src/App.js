import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import AddNewPackage from './Component/AddNewPackage/AddNewPackage';
import BookingAndDetails from './Component/BookingAndDetails/BookingAndDetails';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import ManageAllBooking from './Component/ManageAllBooking/ManageAllBooking';
import Menubar from './Component/Menubar/Menubar';
import MyBooking from './Component/MyBooking/MyBooking';
import NotFound from './Component/NotFound/NotFound';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/Context';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/my_booking">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path="/manage_booking">
              <ManageAllBooking></ManageAllBooking>
            </PrivateRoute>
            <PrivateRoute path="/package/booking_details/:package_id">
              <BookingAndDetails></BookingAndDetails>
            </PrivateRoute>
            <PrivateRoute path="/add_package">
              <AddNewPackage></AddNewPackage>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
