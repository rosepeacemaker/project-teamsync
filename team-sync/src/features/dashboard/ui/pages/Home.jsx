import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../../../shared/state/themeSlice';

const Home = () => {


  const dispatch = useDispatch();

  let handleThemeToggle = () => {
    dispatch(toggleTheme());
  }
  return (
    <div>
        <h1>
          This is my dashboard  home page
        </h1>
        <button onClick={handleThemeToggle} >
change theme
        </button>

    </div>
  )
}

export default Home