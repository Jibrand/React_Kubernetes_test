import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Lines from '../../components/Lines';
import ScrollToTop from '../../components/Sclttop';
import Brands from '../Home/brands';
import Feature from '../Home/feature';
import About from '../Home/about';
import FunFact from '../Home/funfact';
import Integration from '../Home/integration';
import AvanceQuest from '../Home/advancequest';
import CTA from '../Home/cta';
import Testimonial from '../Home/testimonial';
import FeaturesTab from '../Home/featurestab';
import Pricing from '../Home/pricing';
 


const Index = () => {
    return (
        <>
            {/* Header Component */}
            <Header />

            {/* Main content wrapper */}
            <div className='dark:bg-black  '>
                <Lines />
                <main className='pt-36'>
                    <AvanceQuest />
                    {/* <Pricing /> */}
                    {/* <Testimonial /> */}
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
