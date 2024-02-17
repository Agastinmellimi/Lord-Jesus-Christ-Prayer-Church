import { useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import HandlerContext from '../../Context/HandlerContext';

import { NavLink, useNavigate } from 'react-router-dom'
import { BsMenuButtonFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { TbActivityHeartbeat } from "react-icons/tb";
import { VscRootFolder } from "react-icons/vsc";
import { ImArrowUpLeft2 } from "react-icons/im";


import {NavContainer, 
    NavLogo, 
    ProfileBtn, 
    ProfileImage, 
    NavOptionsConatiner, 
    NavOption, 
    MenuBtn,
    MobileOptionsContainer,
    MobileOption, NavigateBtn
} from './StyledComponents'
import 'react-tooltip/dist/react-tooltip.css'




const ChurchNavbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate()
    


    return (
       <HandlerContext.Consumer>
          {value => {
            const {activeTab, setActiveTab} = value
            const navigateMainHome = () => {
                setActiveTab("Home")
                navigate('/')
            }
            const clickProfile = () => {
                setActiveTab("Profile")
                navigate('/profile')
            }
            return (
                <>
                <NavContainer>
                <NavLogo>LJCPC</NavLogo> 
                <NavOptionsConatiner>
                    <ReactTooltip id="root" place="left" className='tooltip'/>
                    <NavLink to='/root' className='link' data-tooltip-id="root" data-tooltip-delay-show={1000} data-tooltip-content={"Home"} onClick={() => setActiveTab("Root")}>
                        <NavOption active={activeTab === 'Root'}><VscRootFolder size={25} /></NavOption>
                    </NavLink>
                    <NavLink to='/messages' className='link' onClick={() => setActiveTab("Messages")}>
                        <NavOption active={activeTab === 'Messages'}>Messages</NavOption>
                    </NavLink>
                    <NavLink to='/Attendance' className='link' onClick={() => setActiveTab("Attendance")}>
                        <NavOption active={activeTab === 'Attendance'}>Attendance</NavOption>
                    </NavLink>
                </NavOptionsConatiner>
                <ReactTooltip id="back" place="bottom" className='tooltip'/>
                <NavigateBtn type='button' data-tooltip-id="back" data-tooltip-delay-show={1000} data-tooltip-content={"back to main"} onClick={navigateMainHome}><ImArrowUpLeft2 /></NavigateBtn>
                <ReactTooltip id="menu" place="bottom" className='tooltip' anchorSelect="#not-clickable"/>
                <MenuBtn type='button' onClick={() => setShowMenu(!showMenu)} data-tooltip-id="menu" data-tooltip-delay-show={1000} data-tooltip-content={"Menu"}>
                    {showMenu ? <IoClose/> : <BsMenuButtonFill/>}
                </MenuBtn>
                <ReactTooltip id='profile' place='bottom' className='tooltip' anchorSelect="#not-clickable"/>
                <ProfileBtn type='button' data-tooltip-id='profile' data-tooltip-delay-show={1000} data-tooltip-content={"Profile"} onClick={clickProfile}>
                    <ProfileImage active={activeTab === 'Profile'} alt='profile' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707641841/bvhi9ypcmixrzolb1kfs.png'/>
                </ProfileBtn>
            </NavContainer>
            <MobileOptionsContainer show={showMenu}>
            <NavLink to='/root' className='link' onClick={() => setActiveTab("Root")}>
                <ReactTooltip id="Home" place="bottom" className='tooltip' />
                <MobileOption active={activeTab === 'Root'} data-tooltip-id="Home" data-tooltip-delay-show={1000} data-tooltip-content={"Home"}>
                        <VscRootFolder  />
                    </MobileOption>
            </NavLink>
            <NavLink to='/messages' className='link' onClick={() => setActiveTab("Messages")}>
            <ReactTooltip id="messages" place="bottom" className='tooltip' />
                <MobileOption active={activeTab === 'Messages'} data-tooltip-id="messages" data-tooltip-delay-show={1000} data-tooltip-content={"Messages"}>
                    <BiMessageSquareDetail/>
                </MobileOption>
            </NavLink>
            <NavLink to='/attendance' className='link' onClick={() => setActiveTab("Attendace")}>
                <ReactTooltip id="Attendance" place="bottom" className='tooltip'/>
                <MobileOption active={activeTab === 'Attendace'} data-tooltip-id="Attendance" data-tooltip-delay-show={1000} data-tooltip-content={"Attendance"}>
                    <TbActivityHeartbeat/>
                </MobileOption>
            </NavLink>
            </MobileOptionsContainer>
            </>
            )
          }}
       </HandlerContext.Consumer>

)}

export default ChurchNavbar