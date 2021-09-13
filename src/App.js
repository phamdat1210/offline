import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './page/HomePage';
import BSPageGame from './page/BSPageGame';
import ProbabilityPage from './page/ProbabilityPage';
import Header from './components/Header';
import { PATH } from './path/paths';
import './css/app.css'

const App = () => {

  return (
    <>
    <HashRouter basename="/off">
      <Header/>
      <main className="wapper">
      <Switch>
        <Route exact path={PATH.HOME}
          component={() => (
          <React.Suspense fallback="Loading.....">
            <HomePage/>
          </React.Suspense>
        )}/>
        <Route exact path={PATH.BIGSMALL}
          component={() => (
          <React.Suspense fallback="Loading.....">
            <BSPageGame/>
          </React.Suspense>
        )}/>
        <Route exact path={PATH.PROBABILITY}
          component={() => (
          <React.Suspense fallback="Loading.....">
            <ProbabilityPage/>
          </React.Suspense>
        )}/>

      </Switch>
      </main>
    </HashRouter>
    </>
  );
};

export default App;
