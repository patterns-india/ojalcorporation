import React from 'react'
import logo from '../../../resources/images/logo-circle.png'
import './Footer.scss'

function Footer(props) {
    return (
        <div className='Footer'>
            <div className='Footer__Container'>
                <div>
                    <img src={logo} alt="logo" height="100px"/>
                    <div className='Footer__Container--heading'>
                        OJAL CORPORATION
                    </div>
                    <div className='Footer__Container--subheading'>
                        Equity Consultants
                    </div>
                </div>
                <div>
                    <div className='Footer__Container--copyright'>
                        © 2021 Ojal Corporation Pvt. Ltd. All rights reserved.
                    </div>
                    <div className='Footer__Container--addr'>
                        C-84 ,Ram das Marg
                        Tilak Nagar,Jaipur - 302004,
                        Rajasthan, India.
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
