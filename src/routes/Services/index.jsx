import React from 'react'

import algoTrading from '../../resources/images/algo-trading.jpg'
import diy from '../../resources/images/diy-investment.jpg'
import mutualFunds from '../../resources/images/mutual-funds.jpg'
import portfolio from '../../resources/images/portfolio-management.jpg'
import trading from '../../resources/images/Trading.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Services.scss'

function Services(props) {
    return (
        <div className='Services'>
            <Navbar invert={true}/>
            <div className='Services__Heading'>
                Our Services
            </div>

            <div className='Services__Container'>

                <div className='Services__Container__SingleService'>
                    <img className='Services__Container__SingleService--image' src={diy} alt="diy" height="200px"/>
                    <div className='Services__Container__SingleService--heading'>
                        Do It Yourself (DIY)
                    </div>
                    <div className='Services__Container__SingleService--subheading'>
                        Trader & Investor
                    </div>
                </div>

                <div className='Services__Container__SingleService'>
                    <img className='Services__Container__SingleService--image' src={portfolio} alt="portfolio" height="200px"/>
                    <div className='Services__Container__SingleService--heading'>
                        Equity Advisory
                    </div>
                    <div className='Services__Container__SingleService--subheading'>
                        Long Term Portfolio Management
                    </div>
                </div>

                <div className='Services__Container__SingleService'>
                    <img className='Services__Container__SingleService--image' src={mutualFunds} alt="diy" height="200px"/>
                    <div className='Services__Container__SingleService--heading'>
                        Mutual Funds
                    </div>
                    <div className='Services__Container__SingleService--subheading'>
                        Long Term Investments
                    </div>
                </div>

                <div className='Services__Container__SingleService'>
                    <img className='Services__Container__SingleService--image' src={trading} alt="diy" height="200px"/>
                    <div className='Services__Container__SingleService--heading'>
                        Options Income
                    </div>
                    <div className='Services__Container__SingleService--subheading'>
                        Trading
                    </div>
                </div>

                <div className='Services__Container__SingleService'>
                    <img className='Services__Container__SingleService--image' src={algoTrading} alt="diy" height="200px"/>
                    <div className='Services__Container__SingleService--heading'>
                        Algorithmic Trading
                    </div>
                    <div className='Services__Container__SingleService--subheading'>
                        Life & General Insurance
                    </div>
                </div>

            </div>

            <Footer/>
        </div>
    )
}

export default Services
