import React from 'react'
import pictureProfile from '../../assets/rector.jpg'
import './PictureProfile.css'
export const PictureProfile = () => {
  return (
    <section className='ContainerImg'>
         <img src={pictureProfile} className='pictureProfile' alt="PictureProfile" />
    </section>
   
    )
}
