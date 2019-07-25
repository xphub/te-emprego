import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import Login from '@pages/login';
import Welcome from '@pages/welcome';

import { Wrapper } from './styles';

function MainWrapper({ location }) {
  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 400, exit: 400 }}
          classNames="dialog"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route path="/login" component={Login} />
              <Route path="/welcome" component={Welcome} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

MainWrapper.propTypes = {
  location: PropTypes.string.isRequired,
};

export default withRouter(MainWrapper);