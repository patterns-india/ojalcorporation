import React from 'react'

import logo from '../../../resources/images/logo-circle.png'
import './LogoWelcome.scss'

function LogoWelcome(props) {
    return (
        <div className='LogoWelcome'>
            <div className='LogoWelcome__Logo'>
                <img src={logo} alt='' width="50%"/>
                <div className='LogoWelcome__Logo--title'>
                    OJAL CORPORATION
                </div>
                <div className='LogoWelcome__Logo--subtitle'>
                    Equity Consultants
                </div>
            </div>
            <div className='LogoWelcome__Text'>
                <div className='LogoWelcome__Text--heading'>
                    Welcome to Ojal Equities
                </div>
                <div className='LogoWelcome__Text--subtext'>
                    A place where we don't just desire to invest, but plan to walk with you on a financial journey and become your long term partner.
                </div>
            </div>
        </div>
    )
}

export default LogoWelcome
