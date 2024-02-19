import React from 'react'
import {Header} from '../../Layouts/Header/Header'
import { Logo } from '../../Logo/Logo'
import {NavBar} from '../../NavBar/NavBar'
import { Items } from '../../Items/items'
import {Main} from '../../Layouts/Main/Main'
import { PictureProfile } from '../../PictureProfile/PictureProfile'
import {DescriptionProfile} from '../../DescriptionProfile/DescriptionProfile'

import './Home.css'

export const Home = () => {
  return (
    <>

    <Main>
    <PictureProfile />
    <DescriptionProfile/>
    </Main>
    </>
    )
}
