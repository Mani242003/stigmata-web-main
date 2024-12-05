import React from 'react'
import ServicesBanner from '../components/ServicesBanner/ServicesBanner'
import imageUrl from "/images/contactBg.jpg"
import ContactForm from '../components/ContactForm';


const Contact = () => {

    const Data = {
        title: "We appreciate your interest in Stigmata!",
        des: "Let's have a discussion!!",
        image: imageUrl,
        isContact : true
      };
  return (
   <>
    <ServicesBanner data={Data} />
    <ContactForm />
   </>
   
  )
}

export default Contact