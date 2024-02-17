import {useNavigate} from 'react-router-dom'
import {Container, ErrorShowText, GotoLoginBtn, LoginErrorImage} from './StyledComponents'



const LoginRequire = () => {
    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login')
    }
    return (
    <Container>
        <LoginErrorImage alt='Authenticate Error' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707317172/dx9n9zqf3q5xhr44jtvy.png'/>
        <ErrorShowText>Please Login, Only users can access the LJCPC root website</ErrorShowText>
        <GotoLoginBtn type='button' onClick={navigateLogin}>
            Go to login
        </GotoLoginBtn>
    </Container>
)}

export default LoginRequire