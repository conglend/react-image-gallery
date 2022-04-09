import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Images from './pages/Images';

import axios from 'axios';

function App() {
  useEffect(() => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
  }, []);

  return (
    <>
      <Router>
        <div className="App">
          <Route exact path="/" component={Images} />
        </div>
      </Router>
    </>
  );
}

export default App;
