import React, {Suspense, lazy} from 'react';
import {Route} from 'react-router-dom';

const Welcome = lazy (() => import ('../components/Welcome'));
const Signup = lazy (() => import ('../components/auth/Signup'));
const Feature = lazy (() => import ('../components/Feature'));
const Signout = lazy (() => import ('../components/auth/Signout'));
const Signin = lazy (() => import ('../components/auth/Signin'));
const CommentList = lazy (() => import ('../components/CommentList'));
const CommentBox = lazy (() => import ('../components/CommentBox'));

const Router = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading component...</div>}>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={Feature} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
        <Route path="/commentlist" component={CommentList} />
        <Route path="/commentbox" component={CommentBox} />
      </Suspense>
    </React.Fragment>
  );
};

export default Router;
