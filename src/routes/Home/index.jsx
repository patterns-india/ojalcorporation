import React from 'react'
import {useNavigate} from 'react-router'

import LogoWelcome from '../components/LogoWelcome'
import Navbar from '../components/Navbar'
import homeBanner from '../../resources/images/homeBanner.jpg'
import invest from '../../resources/images/you-invest.jpg'
import bullet from '../../resources/images/bullet.png'

import team from '../../resources/images/team.png'
import exp from '../../resources/images/exp.png'
import plan from '../../resources/images/plan.png'
import piggy from '../../resources/images/piggy-bank.jpeg'

import './Home.scss'
import Footer from '../components/Footer'
import MarketGraph from './components/MarketGraph'
import Greetings from './components/Greetings'

const Home = () => {

    // const navigate = useNavigate();

    const points = [
        {
            heading: "Beat Inflation",
            subheading: "Long-Term inflation has an average rate of 3.1% since 1913. Stock market's returns, if done intelligently and with proper research , average in double digits. They significantly help grow your wealth and beat inflation."
        },
        {
            heading: "Higher Returns",
            subheading: "The main reason why individuals and organisations invest in the stock market is because the stock market provides much higher returns tham alternative investments such as fixed deposits or gold etc. "
        },
        {
            heading: "Create a Passive Income",
            subheading: "A large number of companies pay their investors Dividends, or a portion of their profits. The dividend payout might be monthly or quarterly, but prove to be a good source of passive income if well planned."
        },
        {
            heading: "Pride of Ownership",
            subheading: "A share of stock in actual terms represents a fractional ownership of the company. So individuals , through stocks, have an opportunity to be a part of any company's success story"
        },
        {
            heading: "Liquidity",
            subheading: "Stock market investments are a much more liquid investment than options such as real estate investments which cannot be quickly sold. Stocks are traded publically through stock exchanges making it incredibly easy to buy and sell."
        },
    ]

    const why = [
        {
            img : exp,
            heading : "Our Experience",
            text : "30 years of solid industry experience and expertise"
        },
        {
            img : team,
            heading : "Dedicated Team",
            text : "Team of closely mentored expert professionals"
        },
        {
            img : plan,
            heading : "Personalised Plans",
            text : "Investments portfolios tailored to your specific needs"
        },
    ]

    return (
        <div className='Home'>
            <Navbar/>

            <div className='Home__Top' style={{position:"relative",zIndex:"1"}}>
                <img src={homeBanner} alt="home" width="100%" height="auto"/> 
                <LogoWelcome/>
            </div>

            <MarketGraph/>

            <Greetings/>

            {/* <img 
                src={piggy} 
                alt="home" 
                width="100%" 
                // height="400px"
            />  */}

            <div className='Home__Invest'>
                
                <div className='Home__Invest__Content'>
                    <div className='Home__Invest--heading'>
                        Why Should I be an Investor?
                    </div>
                    <div className='Home__Invest--text'>
                        The stock market has created enormous amounts of wealth for individuals and corporations over years.
                        Stock market is a steadily growing money plant, which can offer amazing returns provided we invest right, make informed and correct decisions and always be vary of the associated risks.
                    </div>

                    <div className='Home__Invest--benefitHeading'>
                        Benefits of Investing in the Stock Market
                    </div>

                    { points?.map( point => (
                        <div className='Home__Invest--point'>
                            <img className="float"src={bullet} alt="bulelt" height="25px" width="25px" style={{margin:"0 20px 0 0",borderRadius:"100px",padding:"5px"}}/>
                            <div>
                                <span className='bold'>
                                    {point?.heading}
                                </span>
                                &nbsp;:&nbsp;
                                {point?.subheading}
                            </div>
                            
                        </div>
                    ))}
                </div>
                
            </div>

            <div className='Home__WhyUs'>
                <div className='Home__WhyUs--heading'>
                    Why Choose Us?
                </div>

                <div className='Home__WhyUs__Container'>
                {why?.map(point => (
                    <div className='Home__WhyUs--card'>
                        <img className='Home__WhyUs--card--image' src={point?.img} alt="point" height={"60px"} width={"60px"}/>
                        <div className='Home__WhyUs--card--heading' >{point?.heading}</div>
                        <div className='Home__WhyUs--card--text'>{point?.text}</div>
                    </div>
                ))}
                </div>
            </div>

            <Footer/>
            
        </div>
    )
}

export default (Home)
