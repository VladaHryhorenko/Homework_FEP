import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/postsAction';
import PostsSection from './components/PostsSection';

import './App.css';
import { ButtonContainer } from './containers/ButtonContainer';
import PostsContainer from './containers/PostsContainer';

function App() {
    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(getPosts());
    }, [dispatch]);

  return (
    <div className="App">
      <PostsSection />
    </div>
  );
}

export default App;
