import React from 'react'
import Slider from 'react-slick'

import upArrow from '../../../resources/images/up-arrow.png'
import downArrow from '../../../resources/images/down-arrow.png'
import './LiveStocks.scss'

function LiveStocks(props) {

    const stocksData = require("../../../utils/stockData.json")
    const sliderSettings = {
        // dots: true,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        cssEase: "linear",
        pauseOnHover: false,
    }

    return (
        <div className="LiveStocks">
            <Slider {...sliderSettings}>
                { stocksData && stocksData.map((data) => (
                    <div className='LiveStocks__Stock'>
                        <div className='LiveStocks__Stock--name'>
                            {data?.name}
                        </div>
                        <div className='LiveStocks__Stock--value'>
                            {data?.value}
                        </div>
                        <img src={(data.changeType === 1) ? upArrow : downArrow} alt="" height="10px" style={{marginRight:"2px"}}/>
                        <div className='LiveStocks__Stock--change' style={{color: (data.changeType === 1) ? "#1A9700":"#BF2121"}}>
                            ({data?.change}%)
                        </div>
                    </div>
                ))}
            </Slider>
            
        </div>
    )
}

export default LiveStocks
