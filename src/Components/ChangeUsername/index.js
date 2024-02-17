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
    LabelContainer,
    EyeBtn,
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
    BackButton
} from './StyledComponents'
import Cookies from "js-cookie";


const ChangeUsername = (props) => {
    const {functionCall} = props
    const [inputValues, setInputvalues] = useState({
        email: '',
        password: '',
        newName: '',
        isChange: false,
        isLoad: false,
        apiError: false,
        errMsg: '',
        failErr: false,
        successMsg: '',
        showPassword: false,
        emailErr: false,
        passwordErr: false,
        newNameErr: false
    })

    const [blurInputErrs, handleBlurInputErrs] = useState({
        blurEmailEr: false,
        bluePasswordEr: false,
        blurNewNameEr: false
    })

    const submitForm = async event => {
        event.preventDefault()
        const {email, password, newName} = inputValues
        if (email === '' && password === '' && newName === ''){
            setInputvalues(prev => ({
                ...prev,
                emailErr: true,
                passwordErr: true,
                newNameErr: true
            }))
        } else if (email !== '' && password === '' && newName === '') {
            setInputvalues(prev => ({
                ...prev,
                emailErr: false,
                passwordErr: true,
                newNameErr: true
            }))
        } else if (email === '' && password !== '' && newName === '') {
            setInputvalues(prev => ({
                ...prev,
                emailErr: true,
                passwordErr: false,
                newNameErr: true
            }))
        } else if (email === '' && password === '' && newName !== '') {
            setInputvalues(prev => ({
                ...prev,
                emailErr: true,
                passwordErr: true,
                newNameErr: false
            }))
        } else if (email !== '' && password !== '' && newName === ''){
            setInputvalues(prev => ({
                ...prev,
                emailErr: false,
                passwordErr: false,
                newNameErr: true
            }))
        } else if (email !== '' && password === '' && newName !== '') {
            setInputvalues(prev => ({
                ...prev,
                emailErr: false,
                passwordErr: true,
                newNameErr: false
            }))
        } else if (email === '' && password !== '' && newName !== '') {
            setInputvalues(prev => ({
                ...prev,
                emailErr: true,
                passwordErr: false,
                newNameErr: false
            }))
        } else {
            setInputvalues(prev => ({
                ...prev,
                emailErr: false,
                passwordErr: false,
                newNameErr: false,
                isLoad: true
            }))
            try {
                const url = 'https://lordjesus.onrender.com/change-username'
                const jwtToken = Cookies.get('jwt_token')
                const userDetails = {
                    email,
                    password,
                    newName
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
                if (response.ok) {
                    Cookies.remove('username')
                    Cookies.set('username', newName, {expires: 1})
                    functionCall()
                    setInputvalues(prev => ({
                        ...prev,
                        isChange: true,
                        successMsg: data.successMsg,
                        isLoad: false,
                        email: '',
                        password: '',
                        newName: ''
                    }))
                } else {
                    setInputvalues(prev => ({
                        ...prev,
                        isChange: false,
                        apiError: true,
                        errMsg: data.err_msg,
                        isLoad: false,
                        email: '',
                        password: '',
                        newName: ''
                    }))
                }
            } catch (e) {
                setInputvalues(prev => ({
                    ...prev,
                    isChange: false,
                    apiError: true,
                    failErr: true,
                    errMsg: "Sorry there is some error",
                    isLoad: false,
                    email: '',
                    password: '',
                    newName: ''
                }))
            }

        }
    }

    const showPasswordClick = () => {
        setInputvalues(prev => ({...prev, showPassword: !prev.showPassword}))
    }

    const handleEmailBlurError = event => {
        if (event.target.value === '') {
            handleBlurInputErrs(prev => ({
                ...prev,
                blurEmailEr: true
            }))
        } else {
            handleBlurInputErrs(prev => ({
                ...prev,
                blurEmailEr: false
            }))
        }
    }

    const handlePasswordBlurError = event => {
        if (event.target.value === '') {
            handleBlurInputErrs(prev => ({
                ...prev,
                bluePasswordEr: true
            }))
        } else {
            handleBlurInputErrs(prev => ({
                ...prev,
                bluePasswordEr: false
            }))
        }
    }

    const handleNewnameBlurError = event => {
        if (event.target.value === '') {
            handleBlurInputErrs(prev => ({
                ...prev,
                blurNewNameEr: true
            }))
        } else {
            handleBlurInputErrs(prev => ({
                ...prev,
                blurNewNameEr: false
            }))
        }
    }

    const refresh = () => {
        setInputvalues({
            email: '',
            password: '',
            newName: '',
            isChange: false,
            isLoad: false,
            apiError: false,
            errMsg: '',
            successMsg: '',
            showPassword: false,
            emailErr: false,
            passwordErr: false,
            newNameErr: false
        })
        
    }

    return (
        <>
        <Heading>Change username</Heading>
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
                            <Label htmlFor="email">Email</Label>
                            <Input id='email' type='text' emailerr={(inputValues.emailErr || blurInputErrs.blurEmailEr).toString()} onBlur={handleEmailBlurError} value={inputValues.email} placeholder="email..." onChange={(event) => setInputvalues(prev => ({...prev, email: event.target.value}))}/>
                        {inputValues.emailErr && <ErrorMsg>Please provide your email</ErrorMsg>}
                            <LabelContainer>
                                    <Label htmlFor="password">Password</Label>
                                    <EyeBtn type='button' onClick={showPasswordClick}>{inputValues.showPassword ? <PiEyeDuotone/> : <PiEyeClosedDuotone/>}</EyeBtn>
                            </LabelContainer>
                            <Input id='password' passworderr={(inputValues.passwordErr || blurInputErrs.bluePasswordEr).toString()} onBlur={handlePasswordBlurError} type={inputValues.showPassword ? 'text': 'password'} value={inputValues.password} placeholder="password..." onChange={event => setInputvalues(prev => ({...prev, password: event.target.value, showPassword: false}))}/>
                            {inputValues.passwordErr && <ErrorMsg>Please provide your password</ErrorMsg>}
                            <Label htmlFor="New username">New username</Label>
                            <Input id='New username' nameerr={(inputValues.newNameErr || blurInputErrs.blurNewNameEr).toString()} onBlur={handleNewnameBlurError} type='text' value={inputValues.newName} placeholder="new username..." onChange={event => setInputvalues(prev => ({...prev, newName: event.target.value}))}/>
                            {inputValues.newNameErr && <ErrorMsg>Please Provide your new name</ErrorMsg>}
                            <InputSubmitBtn loading={inputValues.isLoad.toString()} type='submit'>{inputValues.isLoad ? <Oval color="#fff" height="30" strokeWidthSecondary={6} width="30"/>: 'Change'}</InputSubmitBtn>
                    </InputFeildContainer>
                    <InputImage alt='change name' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707983594/dkd6glyhubsg5ydbib5b.png'/>
            </InputContainer>
        )}
        </>
    )}


export default ChangeUsername