
import {useNavigate} from 'react-router-dom'


import {NotFoundContainer, NotFoundImage, NotFoundText, GotoHomeBtn} from './StyledComponents'




const NotFound = () => {
    const navigate = useNavigate()
    const navigateHome = () => {
          navigate('/')
    }
    return (
    <NotFoundContainer>
            <NotFoundImage alt='Notfound' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1708162954/emkbkif4vbzjb85wkmyg.png'/>
            <NotFoundText>We are sorry, the page you requested could not be found</NotFoundText>
            <GotoHomeBtn type='button' onClick={navigateHome}>Go to home</GotoHomeBtn>
    </NotFoundContainer>
)}

export default NotFound