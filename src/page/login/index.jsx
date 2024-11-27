import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Lines from '../../components/Lines';
import ScrollToTop from '../../components/Sclttop';
import Login from './login';


const Index = () => {
    return (
        <>
            {/* Header Component */}
            <Header />

            {/* Main content wrapper */}
            <div className='dark:bg-black  '>
                 <main className='pt-20 pb-10'>
                    <Login />
                </main>

                {/* Footer Component */}
                <Footer />

                {/* Scroll to Top Component */}
                <ScrollToTop />
            </div>
        </>
    );
};

export default Index;
