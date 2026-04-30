import React from 'react'
import doctorData from './data/doctorData.json'
import Hero from './components/Hero'
import StartingPoint from './components/StartingPoint'
import HowWeHelp from './components/HowWeHelp'
import WhatToExpect from './components/WhatToExpect'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import ClinicMedia from './components/ClinicMedia'
import VideoSection from './components/VideoSection'
import StructuredSupport from './components/StructuredSupport'
import Appointment from './components/Appointment'
import DoctorDetails from './components/DoctorDetails'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  const { doctor, about, services, testimonials, clinicMedia, videoSection, appointment, footer } = doctorData

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Hero doctor={doctor} />
      <StartingPoint />
      <HowWeHelp />
      <WhatToExpect />
      <VideoSection videoSection={videoSection} />
      <StructuredSupport />
      {/* <About about={about} /> */}
      {/* <Services services={services} /> */}
      <Testimonials testimonials={testimonials} />
      {/* <ClinicMedia clinicMedia={clinicMedia} /> */}
      <Appointment appointment={appointment} />
      <DoctorDetails doctor={doctor} />
      <Footer footer={footer} doctor={doctor} />
      <FloatingWhatsApp whatsappNumber={appointment.whatsappNumber} />
    </div>
  )
}
