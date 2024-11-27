import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Lines from '../../components/Lines';
import ScrollToTop from '../../components/Sclttop';
import Brands from '../Home/brands';
import Training from '../Home/trainings';
import About from '../Home/about';
import FunFact from '../Home/funfact';
import Integration from '../Home/integration';
import CTA from '../Home/cta';
import Testimonial from '../Home/testimonial';
import FeaturesTab from '../Home/featurestab';



const Index = () => {
    return (
        <>
            {/* Header Component */}
            <Header />

            {/* Main content wrapper */}
            <div className='dark:bg-black  '>
                <Lines />
                <main>
                    <Training />
                    {/* <FeaturesTab /> */}
                    <Brands />
                    <CTA />
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
