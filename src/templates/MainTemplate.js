import React from 'react';
import './MainTemplate.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'

const MainTemplate = ({children}) => {
  return (
    <div className='page-container'>
        <Header/>
        <div className='page-content'>
           {children}
        </div>  
        <Footer/>  
    </div>
  )
}

export default MainTemplate