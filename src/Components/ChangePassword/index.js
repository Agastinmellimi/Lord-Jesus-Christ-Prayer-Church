import { useState } from "react";

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
    BackButton
} from './StyledComponents'
import Cookies from "js-cookie";


const ChangePassword = () => {
    
    const [inputValues, setInputvalues] = useState({
            email: '',
            username: '',
            newPassword: '',
            isChange: false,
            isLoad: false,
            apiError: false,
            errMsg: '',
            successMsg: '',
            showPassword: false,
            emailErr: false,
            usernameErr: false,
            newPasswordErr: false
    })

    const [blurInputErrs, handleBlurInputErrs] = useState({
        blurEmailEr: false,
        blueNewPasswordEr: false,
        blurUsernameEr: false
    })

    const submitForm = async event => {
        event.preventDefault()
        const {username, email, newPassword} = inputValues
        if (email === '' && newPassword === '' && username === ''){
            setInputvalues(prev => ({
                ...prev,
                emailErr: true,
                newPasswordErr: true,
                usernameErr: true
            }))
        } else if (email !== '' && newPassword === '' && username === '') {
            setInputvalues(prev => ({
                ...prev,
                emailErr: false,
                newPasswordErr: true,
                usernameErr: true
            }))
        } else if (email === '' && newPassword !== '' && username === '') {
            setInputvalues(prev => ({
                ...prev,
                emailErr: true,
                newPasswordErr: false,
                usernameErr: true
            }))
        } else if (email === '' && newPassword === '' && username !== '') {
            setInputvalues(prev => ({
                ...prev,
                emailErr: true,
                newPasswordErr: true,
                usernameErr: false
            }))
        } else if (email !== '' && newPassword !== '' && username === ''){
            setInputvalues(prev => ({
                ...prev,
                emailErr: false,
                newPasswordErr: false,
                usernameErr: true
            }))
        } else if (email !== '' && newPassword === '' && username !== '') {
            setInputvalues(prev => ({
                ...prev,
                emailErr: false,
                newPasswordErr: true,
                usernameErr: false
            }))
        } else if (email === '' && newPassword !== '' && username !== '') {
            setInputvalues(prev => ({
                ...prev,
                emailErr: true,
                newPasswordErr: false,
                usernameErr: false
            }))
        } else {
            setInputvalues(prev => ({
                ...prev,
                emailErr: false,
                newPasswordErr: false,
                usernameErr: false,
                isLoad: true
            }))
           try {
            const url = 'https://lordjesus.onrender.com/change-password'
            const jwtToken = Cookies.get('jwt_token')
            const userDetails = {
                username,
                email,
                newPassword
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
                
                setInputvalues(prev => ({
                    ...prev,
                    isChange: true,
                    successMsg: data.successMsg,
                    isLoad: false,
                    email: '',
                    username: '',
                    newPassword: ''
                }))
            } else {
                setInputvalues(prev => ({
                    ...prev,
                    isChange: false,
                    apiError: true,
                    errMsg: data.err_msg,
                    isLoad: false,
                    email: '',
                    username: '',
                    newPassword: ''
                }))
            }
           } catch (e) {
                setInputvalues(prev => ({
                    ...prev,
                    isChange: false,
                    apiError: true,
                    failErr: true,
                    errMsg: 'Sorry there is some error',
                    isLoad: false,
                    email: '',
                    username: '',
                    newPassword: ''
                }))
           }

        }
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

    const handleNewPasswordBlurError = event => {
        if (event.target.value === '') {
            handleBlurInputErrs(prev => ({
                ...prev,
                blueNewPasswordEr: true
            }))
        } else {
            handleBlurInputErrs(prev => ({
                ...prev,
                blueNewPasswordEr: false
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
            email: '',
            username: '',
            newPassword: '',
            isChange: false,
            isLoad: false,
            apiError: false,
            errMsg: '',
            failErr: false,
            successMsg: '',
            showPassword: false,
            emailErr: false,
            usernameErr: false,
            newPasswordErr: false
        })
        
    }

    return (
        <>
        <Heading>Change password</Heading>
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
                            <Label htmlFor="username">Username</Label>
                            <Input id='username' type='text' emailerr={(inputValues.usernameErr || blurInputErrs.blurUsernameEr).toString()} onBlur={handleUsernameBlurError} value={inputValues.username} placeholder="username..." onChange={(event) => setInputvalues(prev => ({...prev, username: event.target.value}))}/>
                            {inputValues.usernameErr && <ErrorMsg>Please provide your username</ErrorMsg>}
                            <Label htmlFor="user email">Email</Label>
                            <Input id='user email' type='text' emailerr={(inputValues.emailErr || blurInputErrs.blurEmailEr).toString()} onBlur={handleEmailBlurError} value={inputValues.email} placeholder="email..." onChange={(event) => setInputvalues(prev => ({...prev, email: event.target.value}))}/>
                             {inputValues.emailErr && <ErrorMsg>Please provide your email</ErrorMsg>}
                            <Label htmlFor="New password">New password</Label>
                            <Input id='New password' nameerr={(inputValues.newPasswordErr || blurInputErrs.blueNewPasswordEr).toString()} onBlur={handleNewPasswordBlurError} type='text' value={inputValues.newPassword} placeholder="new password..." onChange={event => setInputvalues(prev => ({...prev, newPassword: event.target.value}))}/>
                            {inputValues.newPasswordErr && <ErrorMsg>Please Provide your new password</ErrorMsg>}
                            <InputSubmitBtn loading={inputValues.isLoad.toString()} type='submit'>{inputValues.isLoad ? <Oval color="#fff" height="30" strokeWidthSecondary={6} width="30"/>: 'Change'}</InputSubmitBtn>
                    </InputFeildContainer>
                    <InputImage alt='change name' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707983079/v6hn49rjfsacukjvsp5i.png'/>
            </InputContainer>
        )}
        </>
    )}


export default ChangePassword