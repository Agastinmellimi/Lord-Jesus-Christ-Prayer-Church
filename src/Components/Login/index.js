import {useState} from "react";
import {useNavigate, Navigate} from 'react-router-dom'
import HandlerContext from "../../Context/HandlerContext";
import Cookies from 'js-cookie'
import { PiEyeClosedDuotone } from "react-icons/pi";
import { PiEyeDuotone } from "react-icons/pi";
import {Oval} from 'react-loader-spinner'

import {LoginBgContainer, 
    WebsiteLogo, 
    LoginFlexContainer, 
    LoginFormContainer, 
    LoginImage, 
    LoginHeading, 
    LoginLabel, 
    NameInput,
    PasswordInput,
    LoginButton, 
    LabelContainer,
     EyeBtn, ErrorMsg, InputFieldContainer, BtnContainer, LoginUserErrorMsg 
} from './StyledComponents'




const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [inputErros, handleInputErrors] = useState({
        usernameError: false,
        passwordError: false,
        
    })
    const [loginCredenitials, setLogincredientials] = useState({
        username: '',
        password: '', 
        errorMsg: '',
        isError: false,
        isLoading: false
    })
    const navigate = useNavigate();
    

    const submitForm = async (event, setActiveTab) => {
        
        event.preventDefault()
        const {username, password} = loginCredenitials
        if (username === '' && password !== "") {
        
            handleInputErrors(() => ({
                passwordError: false,
                usernameError: true
            }))
        } else if (username !== "" && password === "") {
            
            handleInputErrors(() => ({
                usernameError: false,
                passwordError: true
            }))
        } else if (username === "" && password === ""){
           
            handleInputErrors(() => ({
                passwordError: true,
                usernameError: true
            }))
            } else {
                handleInputErrors(() => ({
                    passwordError: false,
                    usernameError: false
                }))
                setLogincredientials(prev => ({
                    ...prev,
                    isLoading: true
                }))
                const LoginUrl = 'https://lordjesus.onrender.com/login'
                const userDetails = {
                    username: loginCredenitials.username,
                    password: loginCredenitials.password
                }
                
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userDetails)
                }
            
                const fetchData = await fetch(LoginUrl, options)
                const data = await fetchData.json()
                if (fetchData.ok) {
                    const {jwtToken} = data
                    Cookies.set("jwt_token", jwtToken, {expires: 1})
                    setLogincredientials(prev => ({
                        ...prev,
                        isLoading: false
                    }))
                    Cookies.set('username', username, {expires: 1})
                    setActiveTab('Root')
                    navigate('/root')
                } else {
                    setLogincredientials(prev => ({
                        ...prev,
                        isError: true,
                        isLoading: false,
                        errorMsg: data.err_msg
                    }))
                }
            }
        
    }

    

    const onChangeUsername = event => {
           setLogincredientials(prevDetails => ({
            ...prevDetails,
            username: event.target.value
           }))
    }

    const onChangePassword = event => {
        setShowPassword(false)
        setLogincredientials(prevDetails => ({
            ...prevDetails,
            password: event.target.value
           }))
    }

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
       return <Navigate to='/root'/>
    } else {
        return (
            <HandlerContext.Consumer>
                {value => {
                    const {setActiveTab} = value
                    return (
                        <LoginBgContainer>
                        <WebsiteLogo>LJCPC</WebsiteLogo>
                        <LoginFlexContainer>
                            <LoginFormContainer onSubmit={(event) => submitForm(event, setActiveTab) }>
                                <LoginHeading>Login</LoginHeading>
                                <InputFieldContainer>
                                    <LoginLabel htmlFor='username'>username</LoginLabel>
                                    <NameInput error={inputErros.usernameError} type='text' id='username' value={loginCredenitials.username} onChange={onChangeUsername} />
                                    {inputErros.usernameError && <ErrorMsg>please enter your username</ErrorMsg>}
                                </InputFieldContainer>
                                <InputFieldContainer>
                                       <LabelContainer>
                                            <LoginLabel htmlFor='password'>password</LoginLabel>
                                            <EyeBtn type='button' onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <PiEyeDuotone/> : <PiEyeClosedDuotone/>}
                                            </EyeBtn>
                                        </LabelContainer>
                                        <PasswordInput error={inputErros.passwordError} id='password' onChange={onChangePassword} value={loginCredenitials.password} type={showPassword ? 'text' : 'password'} />
                                        {inputErros.passwordError && <ErrorMsg>please enter your password</ErrorMsg>}
                                        
                                        
                                </InputFieldContainer>
                                <BtnContainer>
                                    {loginCredenitials.isError && <LoginUserErrorMsg >{loginCredenitials.errorMsg}</LoginUserErrorMsg>}
                                <LoginButton type='submit'>{loginCredenitials.isLoading ? <Oval color="rgb(46, 42, 72)" strokeWidth={3} strokeWidthSecondary={6} height="30" width="30"/> : "Login"}</LoginButton>
                                </BtnContainer>
                            </LoginFormContainer>
                            <LoginImage alt='Login Image' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707643120/nayeg1rww1uhdefof2ig.png'/>
                        </LoginFlexContainer>
                        </LoginBgContainer>
                    )
                }}
            </HandlerContext.Consumer>
       )
    }

    }

export default Login