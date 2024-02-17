
import { useState } from "react";
import HandlerContext from "../../Context/HandlerContext";


import { Tooltip as ReactTooltip } from 'react-tooltip'
import { RiMailSendFill } from "react-icons/ri";
import {NavLink, useNavigate} from 'react-router-dom'
import { LuMenu } from "react-icons/lu";
import { TbListDetails } from "react-icons/tb";
import { IoHome, IoClose } from "react-icons/io5";
import { IoNavigate } from "react-icons/io5";




import {NavContainer, NavLogo, NavOptionsConatiner,NavigateBtn, NavOption, MenubarBtn, MobileOptionsContainer, MobileOption} from './StyledComponents'
import 'react-tooltip/dist/react-tooltip.css'


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate()

    
    
    return (
       <HandlerContext.Consumer>
           {value => {
            const {activeTab, setActiveTab} = value
            const navigateRoot = () => {
                setActiveTab("Root")
                navigate('/root')
           }
            return (
                <>
                <NavContainer>
                    <NavLogo>LJCPC</NavLogo>
                    <NavOptionsConatiner>
                        <NavLink to='/' className='link' onClick={() => setActiveTab("Home")}><NavOption active={activeTab==="Home"}>Home</NavOption></NavLink>
                        <NavLink to='/about' className='link' onClick={() => setActiveTab("About")}><NavOption active={activeTab==="About"}>About</NavOption></NavLink>
                        <NavLink to='/contact' className='link' onClick={() => setActiveTab("Contact")}><NavOption active={activeTab==="Contact"}>Contect Us</NavOption></NavLink>
                    </NavOptionsConatiner>
                    <ReactTooltip id="navigate" place="bottom" className="tool"/>
                    <NavigateBtn type="button" data-tooltip-id="navigate" data-tooltip-delay-show={1000} data-tooltip-content={"Root Webpage"} onClick={navigateRoot}>
                        <IoNavigate/>
                    </NavigateBtn>
                    <ReactTooltip id="menuBtn" place="bottom" anchorSelect="#not-clickable" className="tool"/>
                    <MenubarBtn data-tooltip-id="menuBtn" data-tooltip-delay-show={1000} data-tooltip-content={"Menu"} type='button' onClick={() => setShowMenu(!showMenu)}>
                       {showMenu ? <IoClose/> : <LuMenu/> }
                    </MenubarBtn>
                </NavContainer>
            
                <MobileOptionsContainer show={showMenu}>
                <NavLink to='/' className='link' onClick={() => setActiveTab("Home")}>
                    <ReactTooltip id="Home" place="bottom" className="tool"/>
                    <MobileOption data-tooltip-id="Home" active={activeTab==="Home"} data-tooltip-delay-show={1000} data-tooltip-content={"Home"}>
                            <IoHome/>
                        </MobileOption>
                </NavLink>
                <NavLink to='/about' className='link' onClick={() => setActiveTab("About")}>
                   <ReactTooltip id="About" place="bottom" className="tool"/>
                    <MobileOption data-tooltip-id="About" active={activeTab==="About"} data-tooltip-delay-show={1000} data-tooltip-content={"About"}>
                        <TbListDetails />
                    </MobileOption>
                </NavLink>
                <NavLink to='/contact' className='link' onClick={() => setActiveTab("Contact")}>
                    <ReactTooltip id="Contact" place="bottom" className="tool"/>
                    <MobileOption data-tooltip-id="Contact" active={activeTab==="Contact"} data-tooltip-delay-show={1000} data-tooltip-content={"Contact Us"}>
                        <RiMailSendFill/>
                    </MobileOption>
                </NavLink>
                </MobileOptionsContainer>
                </>
            )
           }}
       </HandlerContext.Consumer>
)}

export default Navbar