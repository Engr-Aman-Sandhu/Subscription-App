import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Nav from './components/Nav';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import StripeSuccess from './pages/stripe-success';
import StripeCancel from './pages/stripe-cancel';

function App() {
  return (
    <Router>
      <Nav />
      <Toaster
        position="buttom-right"
        toastOptions={{
          duration: 2000,
        }}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/stripe/success" component={StripeSuccess} />
        <Route exact path="/stripe/cancel" component={StripeCancel} />
      </Switch>
    </Router>
  );
}

export default App;
