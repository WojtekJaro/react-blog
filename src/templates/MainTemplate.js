import React from 'react';
import './MainTemplate.css';
import Header from '../components/Header/Header';

const MainTemplate = ({children}) => {
  return (
    <div className='page-container'>
        <Header/>
        <div className='page-content'>
           {children}
        </div>    
    </div>
  )
}

export default MainTemplate