import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SlavSwap } from '../pages/SlavSwap';
import { Home } from '../pages/Home';
import { RoseSwap } from '../pages/RoseSwap';
import { AmmoSwap } from '../pages/AmmoSwap';
import { Axe } from '../pages/Axe';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/RoseSwap' component={RoseSwap}></Route>
      <Route exact path='/SlavSwap' component={SlavSwap}></Route>
      <Route exact path='/AmmoSwap' component={AmmoSwap}></Route>
      <Route exact path='/Axe' component={Axe}></Route>
    </Switch>
  );
}

export default Main;