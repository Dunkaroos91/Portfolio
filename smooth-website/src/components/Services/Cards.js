import React from 'react'
import CardItem from './CardItem.js';
import './Cards.css';
import Reddit from '../../images/RedditCone.png'
import PvP from '../../images/pvptracker.png'
import Thoughts from '../../images/creativethoughts.PNG'
import Adventure from '../../images/adventure.PNG'
import Crypto from '../../images/cryptotracker.PNG'

function Cards() {
  return (
    <div className='cards'>
        <h1>Projects</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src={Reddit}
                    text='Reddit Clone 2.0'
                    label='Next.js/TypeScript/Firebase'
                    path='https://reddit-clone-chi-five.vercel.app/'
                    />
                    <CardItem 
                    src={PvP}
                    text='World of Warcraft PvP Tracker'
                    label='React.js/Firebase'
                    path='https://pvp-track-nextjs.vercel.app/'
                    />
                </ul>
                <ul className='cards__items'>
                <CardItem
              src={Thoughts}
              text='Creative Thoughts Message Board'
              label='Next.js/Firebase'
              path='https://creative-thoughts-one.vercel.app/'
            />
            <CardItem
              src={Adventure}
              text='CSS Travel Template'
              label='React.js/HTML/CSS'
              path='https://css-website-project.vercel.app/'
            />
            <CardItem
              src={Crypto}
              text='Crypto Tracker'
              label='React.js'
              path='https://splendorous-biscuit-a6a965.netlify.app/'
            />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards