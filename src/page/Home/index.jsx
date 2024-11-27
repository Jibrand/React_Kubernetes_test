import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Lines from '../../components/Lines';
import ScrollToTop from '../../components/Sclttop';
import Hero from './hero';
import Brands from './brands';
import Feature from './feature';
import About from './about';
import FeaturesTab from './featurestab';
import FunFact from './funfact';
import Integration from './integration';
import CTA from './cta';
import FAQ from './faq';
import Testimonial from './testimonial';
import Pricing from './pricing';
import Contact from './contact';

const Index = () => {
    return (
        <>
            {/* Header Component */}
            <Header />

            {/* Main content wrapper */}
            <div className='dark:bg-black'>
                <Lines />
                <main>
                    <Hero />
                    <Brands />
                    <Feature />
                    {/* <About /> */}
                    <FeaturesTab />
                    <FunFact />
                    <Integration />
                    <Testimonial />
                    {/* <Pricing /> */}
                    <FAQ />
                    <CTA />
                    {/* <Contact /> */}
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
