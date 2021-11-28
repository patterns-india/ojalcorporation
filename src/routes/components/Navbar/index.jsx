import React,{useEffect} from 'react'
import { useNavigate } from 'react-router'

import LiveStocks from '../LiveStocks'
import circleLogo from '../../../resources/images/logo-circle.png'
import './Navbar.scss'
import { Link } from 'react-router-dom'

function Navbar(props) {

    const navigate = useNavigate()
    const { invert } = props;

    const cssChange = () => {
        if(!invert) {
            const navbar = document.getElementById('Navbar')
            if(window.scrollY > 20) {
                navbar?.classList.add('Invert')
            } else {
                navbar?.classList.remove('Invert')
            }
        }
        
    }

    useEffect(() => {
        if(!invert) {
            window.addEventListener('scroll',cssChange);
        }
        return () => {
            window.removeEventListener('scroll',cssChange)
        }
    }, [])
    

    return (
        <div className={`Navbar ${invert ? "Invert":""}`} id="Navbar">
            <LiveStocks/>
            <div className='Navbar__Menu'>
                <img src={circleLogo} alt="" height="60px"/>
                <div className='Navbar__Menu--item' onClick={()=>navigate('/')}>
                    Home
                </div>
                <div className='Navbar__Menu--item' onClick={()=>navigate('/services')}>
                    Services
                </div>
                <div className='Navbar__Menu--item' onClick={()=>navigate('/plans')}>
                    Plans
                </div>
            </div>
        </div>
    )
}

export default Navbar
