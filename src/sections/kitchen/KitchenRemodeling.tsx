import React from 'react'
import Footer from '../../components/Footer/Footer'
import Testimonials from '../Home/Testimonials'
import Projects from '../Home/Projects'
import Process from '../Home/Process'
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack'
import { Welcome3 } from './Welcome3'
import { SectionCustom } from './SectionCustom'
import { SectionOptions } from './SectionOptions'
import KitchenCostSection from './KitchenCostSection'
import FAQSection from './FAQSection'

export const KitchenRemodeling = () => {
  return (
    <>
    <HeaderBlack/>
    <Welcome3/>
    <SectionCustom/>
    <SectionOptions/>
    <KitchenCostSection/>
    <Process/>
    <FAQSection/>
    <Projects/>
    <Testimonials/>
    <Footer/>
    </>
  )
}
