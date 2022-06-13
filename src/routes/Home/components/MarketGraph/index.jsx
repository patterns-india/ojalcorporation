import React from 'react'
import graph from '../../../../resources/images/graph.jpg'

function MarketGraph(props) {
  return (
    <div className='Home__Graph'>
      <div className='Home__Graph__Container'>

        <img src={graph} alt="graph" height="500px" style={{border:"1px solid black"}}/>
        <div className='Home__Graph__Text'>
          <div>
            <div className='Home__Graph__Text--textBox'>
              Stock prices and trends are determined in the marketplace, where buyer demand is fulfilled by the seller suply.
              Stock market volatility, or the fluctuations in the prices of the stocks, is one of the main concerns of anyone who is an investor.
            </div>
            <div className='Home__Graph__Text--textBox'>
              Volatility is driven by an endless number of factors, including but not limited to, the company's performance vis-a-vis their profits,
              performance of their competitors, general market trends in the country etc.
            </div>
            <div className='Home__Graph__Text--textBox'>
              In the short term stock markets show high volatility as temporary factors flutuate the market up and down. But as the market grows and
              expands over time, the stock value steadily climbs up. This results in a reduction in the effect volatility has and gives great capital gains!
            </div>
          </div>
          <div>
          Get In Touch With Us!
            <div className='Home__Graph__Text--getInTouch'>       
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default MarketGraph