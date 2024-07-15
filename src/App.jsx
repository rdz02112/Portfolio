import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import  Skills  from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import ContactForm from './components/ContactMe/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import { Link } from "react-scroll";


const App = () => {
  return (
    <>
     <Navbar />
     <div className="container">
     <section id="home" ></section>

     <Hero />
     <section id="skills" > </section>
     <Skills />
     <section id="work-experience"> </section>
     <WorkExperience />
     
     <ContactMe />
     <section id="contact-me" ></section>
     <Footer />
     </div>

    </>
  );
};

export default App ;
