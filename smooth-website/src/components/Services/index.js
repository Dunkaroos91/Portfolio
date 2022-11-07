import React from 'react';
import Icon1 from '../../images/weather1.svg'
import Icon2 from '../../images/chore1.svg'
import Icon3 from '../../images/fitness1.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>My Projects</ServicesH1>
        <ServicesWrapper>
            <ServicesCard alt="" onClick={()=> window.open('https://cgweather.netlify.app/')}>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Weather App</ServicesH2>
                <ServicesP>Displays Weather per Location</ServicesP>
            </ServicesCard>
            <ServicesCard alt="" onClick={()=> window.open('https://cgtodo.netlify.app/')}>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>To-Do List</ServicesH2>
                <ServicesP>Create and Delete To-do's</ServicesP>
            </ServicesCard>
            <ServicesCard alt="" onClick={()=> window.open('https://barloaded.netlify.app/')}>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Bar Loader</ServicesH2>
                <ServicesP>Puts lbs into kg Barbell</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services