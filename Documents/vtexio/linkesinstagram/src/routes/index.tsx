import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Varejo from '../pages/Varejo';
import Atacado from '../pages/Atacado';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Varejo} />
    <Route path="/varejo" component={Varejo} />
    <Route path="/atacado" component={Atacado} />
  </Switch>
);

export default Routes;
