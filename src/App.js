import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import React from 'react';

//crud
import PostsProvider from './Providers/PostsProvider';
import HomePage from './components/pages/HomePage';
import NewPostPage from './components/pages/NewPostPage';
import SelectedPostPage from './components/pages/SelectedPostPage';
import EditPostPage from './components/pages/EditPostPage';
import NotFoundPage from './components/pages/NotFoudPage';

function App() {
  return (
    <>
      <div className="task-title">CRUD</div>
      
      <PostsProvider>
        <Router >          
          <Switch>
            <Route path='/posts/new'
                render={(props) => <NewPostPage {...props}/>}/>
            <Route path='/posts/:id/editing' 
                render={(props) => <EditPostPage {...props}/>}/>
            <Route path='/posts/:id' 
                render={(props) => <SelectedPostPage {...props}/>}/>
            <Route  path='/'
                render={(props) => <HomePage {...props} />}/>
            <Route path='*' 
                render={(props) => <NotFoundPage {...props} /> } />

          </Switch>
        </Router> 
      </PostsProvider>
    </>
  );
}

export default App;