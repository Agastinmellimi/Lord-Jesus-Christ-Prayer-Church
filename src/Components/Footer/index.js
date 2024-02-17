import {useNavigate} from 'react-router-dom'
import HandlerContext from '../../Context/HandlerContext'

import {
    FooterContainer,
    FooterConetentContainer, 
    FooterHeading,
    FooterText, 
    Btn,
    CreatorName
} from './StyledComponents'


const Footer = () => {
    const navigate = useNavigate()
    

    return(
    <HandlerContext.Consumer>
        {value => {
            const {setActiveTab} = value
            const navigateContact = () => {
                setActiveTab("Contact")
                navigate('/contact')
           }
            return (
                <FooterContainer>
                    <FooterConetentContainer>
                    <FooterHeading>LJCPC</FooterHeading>
                    <FooterText>Thank you for visiting the <span style={{color: "#fff"}}>LJCPC</span> website, if you want to contact prayer request's and other details please click on Contact Us section and send your Message.</FooterText>
                    <Btn type='button' onClick={navigateContact}>Contact Us</Btn>
                    </FooterConetentContainer>
                    <CreatorName>Designed by <span style={{color: "#78e6f5"}}><span style={{color: "#e6e47e"}}>@</span>Agastin Mellimi.</span></CreatorName>
                </FooterContainer>
            )
        }}
    </HandlerContext.Consumer>
)}

export default Footer

