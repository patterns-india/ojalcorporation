import React from 'react'
import {useNavigate} from 'react-router'

import LogoWelcome from '../components/LogoWelcome'
import Navbar from '../components/Navbar'
import homeBanner from '../../resources/images/homeBanner.jpg'
import graph from '../../resources/images/graph.jpg'
import './Home.scss'
import Footer from '../components/Footer'

const Home = () => {

    // const navigate = useNavigate();

    return (
        <div className='Home'>
            <Navbar/>

            <div className='Home__Top' style={{position:"relative",zIndex:"1"}}>
                <img src={homeBanner} alt="home" width="100%" height="auto"/> 
                <LogoWelcome/>
            </div>

            <div className='Home__Graph'>
                <img src={graph} alt="graph" height="500px"/>
                <div className='Home__Graph--text'>
                    Sample Text for graph.Sample Text for graph.Sample Text for graph.Sample Text for graph.Sample Text for graph.
                    Sample Text for graph.Sample Text for graph.Sample Text for graph.Sample Text for graph.Sample Text for graph.
                </div>
            </div>

            <div className='Home__Greetings'>
                <div className='Home__Greetings__Head'>
                        <div className='Home__Greetings__Head--heading'>
                            Greetings from Mr. Vivek Khandelwal
                        </div>
                        <div className='Home__Greetings__Head--subheading'>
                            CEO, Ojal Corporation
                        </div>
                </div>
                <div className='Home__Greetings__Video'>
                    Video
                </div>

                <div className='Home__Greetings__Text'>
                    Ojal Equities and associated team help you analyze your future financial needs and plan your investments accordingly.
                </div>

                <div className='Home__Greetings__Text'>
                    We, together, will carefully assess your financial goals and plan your investments in various financial instruments including Equity,Mutual Funds, etc. depending on your needs. We’ll chalk your investment plan that will be designed to generate optimal results for You
                </div>

                <div className='Home__Greetings__Text'>
                    The basic financial products are specifically offered after understanding and analysing individual needs as every Person has different ideas about the way they want to lead their future lives.
                    <br/>
                    Come Join us today to benefit from the most experienced and prudent financial team at OJAL EQUITIES. 
                    Please contact us on below mail or phone numbers for any query.
                </div>

                <div className='Home__Greetings__Explore'>
                    Explore Our Sevices
                </div>
                <div className='Home__Greetings__Explore'>
                    Explore Our investment Plans
                </div>
            </div>

            <Footer/>
            
        </div>
    )
}

export default (Home)
