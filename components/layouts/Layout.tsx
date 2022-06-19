import React from 'react';
import Header from './Header';

// For now it will type any, change later
const Layout = ({ children }: any) => {
    return (
        <div className='d-flex flex-column h-100'>
            <Header />
            {children}
        </div>
    );
};

export default Layout;
