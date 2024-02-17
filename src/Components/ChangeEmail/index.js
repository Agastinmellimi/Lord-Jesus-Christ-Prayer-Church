import { useState } from "react";
import { PiEyeClosedDuotone } from "react-icons/pi";
import { PiEyeDuotone } from "react-icons/pi";
import {Oval} from 'react-loader-spinner'

import {
    Heading, 
    InputContainer, 
    InputSubmitBtn, 
    InputFeildContainer, 
    Label, 
    Input, 
    InputImage,
    ErrorMsg,
    SendSuccessContainer,
    SuccessText,
    SuccessTextContainer,
    SuccessImage,
    RefreshBtn,
    UserFailureContainer,
    NotFoundText,
    NotFoundImage,
    NotFoundTextContainer,
    BackButton,
    LabelContainer,
    EyeBtn
} from './StyledComponents'
import Cookies from "js-cookie";


const ChangeEmail = (props) => {
    const {callFunction} = props
    
    const [inputValues, setInputvalues] = useState({
            newEmail: '',
            username: '',
            password: '',
            isChange: false,
            isLoad: false,
            apiError: false,
            errMsg: '',
            failErr: false,
            successMsg: '',
            showPassword: false,
            newEmailErr: false,
            usernameErr: false,
            passwordErr: false
    })

    const [blurInputErrs, handleBlurInputErrs] = useState({
        blurNewEmailEr: false,
        blurPasswordEr: false,
        blurUsernameEr: false
    })

    const submitForm = async event => {
        event.preventDefault()
        const {username, newEmail, password} = inputValues
        if (newEmail === '' && password === '' && username === ''){
            setInputvalues(prev => ({
                ...prev,
                newEmailErr: true,
                passwordErr: true,
                usernameErr: true
            }))
        } else if (newEmail !== '' && password === '' && username === '') {
            setInputvalues(prev => ({
                ...prev,
                newEmailErr: false,
                passwordErr: true,
                usernameErr: true
            }))
        } else if (newEmail === '' && password !== '' && username === '') {
            setInputvalues(prev => ({
                ...prev,
                newEmailErr: true,
                passwordErr: false,
                usernameErr: true
            }))
        } else if (newEmail === '' && password === '' && username !== '') {
            setInputvalues(prev => ({
                ...prev,
                newEmailErr: true,
                passwordErr: true,
                usernameErr: false
            }))
        } else if (newEmail !== '' && password !== '' && username === ''){
            setInputvalues(prev => ({
                ...prev,
                newEmailErr: false,
                passwordErr: false,
                usernameErr: true
            }))
        } else if (newEmail !== '' && password === '' && username !== '') {
            setInputvalues(prev => ({
                ...prev,
                newEmailErr: false,
                passwordErr: true,
                usernameErr: false
            }))
        } else if (newEmail === '' && password !== '' && username !== '') {
            setInputvalues(prev => ({
                ...prev,
                newEmailErr: true,
                passwordErr: false,
                usernameErr: false
            }))
        } else {
            setInputvalues(prev => ({
                ...prev,
                newEmailErr: false,
                passwordErr: false,
                usernameErr: false,
                isLoad: true
            }))
            try {
                const url = 'https://lordjesus.onrender.com/change-email'
                const jwtToken = Cookies.get('jwt_token')
                const userDetails = {
                    username,
                    password,
                    newEmail
                }
                
                const options = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwtToken}`
                    },
                    body: JSON.stringify(userDetails)
                }
                const response= await fetch(url, options)
                const data = await response.json()
                console.log(userDetails)
                if (response.ok) {
                    callFunction()
                    setInputvalues(prev => ({
                        ...prev,
                        isChange: true,
                        apiError: false,
                        successMsg: data.successMsg,
                        isLoad: false,
                        newEmail: '',
                        username: '',
                        password: ''
                    }))
                } else {
                    setInputvalues(prev => ({
                        ...prev,
                        isChange: false,
                        apiError: true,
                        errMsg: data.err_msg,
                        isLoad: false,
                        newEmail: '',
                        username: '',
                        password: ''
                    }))
                }
            } catch (e) {
                setInputvalues(prev => ({
                    ...prev,
                    isChange: false,
                    apiError: true,
                    errMsg: 'Sorry there is some error',
                    failErr: true,
                    isLoad: false,
                    newEmail: '',
                    username: '',
                    password: ''
                }))
            }

        }
    }

    

    const handleNewEmailBlurError = event => {
        if (event.target.value === '') {
            handleBlurInputErrs(prev => ({
                ...prev,
                blurNewEmailEr: true
            }))
        } else {
            handleBlurInputErrs(prev => ({
                ...prev,
                blurNewEmailEr: false
            }))
        }
    }

    const handlePasswordBlurError = event => {
        if (event.target.value === '') {
            handleBlurInputErrs(prev => ({
                ...prev,
                blurPasswordEr: true
            }))
        } else {
            handleBlurInputErrs(prev => ({
                ...prev,
                blurPasswordEr: false
            }))
        }
    }

    const handleUsernameBlurError = event => {
        if (event.target.value === '') {
            handleBlurInputErrs(prev => ({
                ...prev,
                blurUsernameEr: true
            }))
        } else {
            handleBlurInputErrs(prev => ({
                ...prev,
                blurUsernameEr: false
            }))
        }
    }

    const refresh = () => {
        setInputvalues({
            newEmail: '',
            username: '',
            password: '',
            isChange: false,
            isLoad: false,
            apiError: false,
            errMsg: '',
            successMsg: '',
            showPassword: false,
            newEmailErr: false,
            usernameErr: false,
            passwordErr: false
        })
        
    }

    const showPasswordClick = () => {
        setInputvalues(prev => ({...prev, showPassword: !prev.showPassword}))
    }

    return (
        <>
        <Heading>Change email</Heading>
        {inputValues.isChange ? (
            <SendSuccessContainer>
                <SuccessTextContainer>
                    <SuccessText>{inputValues.successMsg}</SuccessText>
                    <RefreshBtn type='button' onClick={refresh}>Back</RefreshBtn>
                </SuccessTextContainer>
                    <SuccessImage alt='Msg Success' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707827911/ign1j5xwwfq1cbasyfb1.png'/>
            </SendSuccessContainer>
        ) : inputValues.apiError ? (
            <UserFailureContainer>
                    <NotFoundImage alt='user name exist' src={inputValues.failErr ? "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1708081660/z8ldbbkea2rzalwagrzr.png" : 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707990706/k3yuvyjhdhdr0kqirv7j.png'}/>
                    <NotFoundTextContainer>
                        <NotFoundText>{inputValues.errMsg}</NotFoundText>
                        <BackButton type='button' onClick={refresh}>Back</BackButton>
                    </NotFoundTextContainer>
            </UserFailureContainer>
        )
        :(
             <InputContainer>
                    <InputFeildContainer onSubmit={submitForm}>
                            <Label htmlFor="user">Username</Label>
                            <Input id='user' type='text' emailerr={(inputValues.usernameErr || blurInputErrs.blurUsernameEr).toString()} onBlur={handleUsernameBlurError} value={inputValues.username} placeholder="username..." onChange={(event) => setInputvalues(prev => ({...prev, username: event.target.value}))}/>
                            {inputValues.usernameErr && <ErrorMsg>Please provide your username</ErrorMsg>}
                            <LabelContainer>
                                    <Label htmlFor="password">Password</Label>
                                    <EyeBtn type='button' onClick={showPasswordClick}>{inputValues.showPassword ? <PiEyeDuotone/> : <PiEyeClosedDuotone/>}</EyeBtn>
                            </LabelContainer>
                            <Input id='password' passworderr={(inputValues.passwordErr || blurInputErrs.blurPasswordEr).toString()} onBlur={handlePasswordBlurError} type={inputValues.showPassword ? 'text': 'password'} value={inputValues.password} placeholder="password..." onChange={event => setInputvalues(prev => ({...prev, password: event.target.value, showPassword: false}))}/>
                             {inputValues.passwordErr && <ErrorMsg>Please provide your password</ErrorMsg>}
                            <Label htmlFor="New Email">New email</Label>
                            <Input id='New Email' nameerr={(inputValues.newEmailErr || blurInputErrs.blurNewEmailEr).toString()} onBlur={handleNewEmailBlurError} type='text' value={inputValues.newPassword} placeholder="new email..." onChange={event => setInputvalues(prev => ({...prev, newEmail: event.target.value}))}/>
                            {inputValues.newEmailErr && <ErrorMsg>Please Provide your new email</ErrorMsg>}
                            <InputSubmitBtn loading={inputValues.isLoad.toString()} type='submit'>{inputValues.isLoad ? <Oval color="#fff" height="30" strokeWidthSecondary={6} width="30"/>: 'Change'}</InputSubmitBtn>
                    </InputFeildContainer>
                    <InputImage alt='change name' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707982764/fgwktd8wok3a4infmcrg.png'/>
            </InputContainer>
        )}
        </>
    )}


export default ChangeEmail