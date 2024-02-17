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
    BackButton,
    RadioInputContainer,
    RadioInput,
    RadioLabel
} from './StyledComponents'

const genderObject =  {
    male: "MALE",
    female: "FEMALE",
}


const CreateUser = () => {
    const [inputValues, setInputvalues] = useState({
        email: '',
        password: '',
        username: '',
        gender: "MALE",
        isCreate: false,
        isLoad: false,
        apiError: false,
        errMsg: '',
        failErr: false,
        successMsg: '',
        showPassword: false,
        emailErr: false,
        passwordErr: false,
        usernameErr: false
    })

    const [blurInputErrs, handleBlurInputErrs] = useState({
        blurEmailEr: false,
        bluePasswordEr: false,
        blurUsernameEr: false
    })

    const submitForm = async event => {
        event.preventDefault()
        const {email, password, username, gender} = inputValues
        if (email === '' && password === '' && username === ''){
            setInputvalues(prev => ({
                ...prev,
                emailErr: true,
                passwordErr: true,
                usernameErr: true
            }))
        } else if (email !== '' && password === '' && username === '') {
            setInputvalues(prev => ({
                ...prev,
                emailErr: false,
                passwordErr: true,
                usernameErr: true
            }))
        } else if (email === '' && password !== '' && username === '') {
            setInputvalues(prev => ({
                ...prev,
                emailErr: true,
                passwordErr: false,
                usernameErr: true
            }))
        } else if (email === '' && password === '' && username !== '') {
            setInputvalues(prev => ({
                ...prev,
                emailErr: true,
                passwordErr: true,
                usernameErr: false
            }))
        } else if (email !== '' && password !== '' && username === ''){
            setInputvalues(prev => ({
                ...prev,
                emailErr: false,
                passwordErr: false,
                usernameErr: true
            }))
        } else if (email !== '' && password === '' && username !== '') {
            setInputvalues(prev => ({
                ...prev,
                emailErr: false,
                passwordErr: true,
                usernameErr: false
            }))
        } else if (email === '' && password !== '' && username !== '') {
            setInputvalues(prev => ({
                ...prev,
                emailErr: true,
                passwordErr: false,
                usernameErr: false
            }))
        } else {
            setInputvalues(prev => ({
                ...prev,
                emailErr: false,
                passwordErr: false,
                usernameErr: false,
                isLoad: true
            }))
            
            try {
                const url = 'https://lordjesus.onrender.com/register'
                
                const userDetails = {
                   username,
                   password,
                   email,
                   gender
                }
                
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userDetails)
                }
                const response= await fetch(url, options)
                const data = await response.json()
                if (response.ok) {
                    setInputvalues(prev => ({
                        ...prev,
                        isCreate: true,
                        successMsg: data.successMsg,
                        isLoad: false,
                        email: '',
                        password: '',
                        username: '',
                        gender: "MALE"
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
                        username: '',
                        gender: "MALE"
                    }))
                }
            } catch (e) {
                console.log(e)
                setInputvalues(prev => ({
                    ...prev,
                    isChange: false,
                    apiError: true,
                    failErr: true,
                    errMsg: "Sorry there is some error",
                    isLoad: false,
                    email: '',
                    password: '',
                    username: '',
                    gender: "MALE"
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
            password: '',
            userame: '',
            gender: "MALE",
            isCreate: false,
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

    const changeMaleRadio = (event) => {
        setInputvalues(prev => ({...prev, gender: event.target.value}))
    }

    const changeFemaleRadio = event => {
        setInputvalues(prev => ({...prev, gender: event.target.value}))
    }

    return (
        <>
        <Heading>Create user</Heading>
        {inputValues.isCreate ? (
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
                                <Input id='username' nameerr={(inputValues.usernameErr || blurInputErrs.blurUsernameEr).toString()} onBlur={handleUsernameBlurError} type='text' value={inputValues.username} placeholder="username..." onChange={event => setInputvalues(prev => ({...prev, username: event.target.value}))}/>
                                {inputValues.usernameErr && <ErrorMsg>Please Provide your new name</ErrorMsg>}
                            <LabelContainer>
                                    <Label htmlFor="password">Password</Label>
                                    <EyeBtn type='button' onClick={showPasswordClick}>{inputValues.showPassword ? <PiEyeDuotone/> : <PiEyeClosedDuotone/>}</EyeBtn>
                            </LabelContainer>
                                    <Input id='password' passworderr={(inputValues.passwordErr || blurInputErrs.bluePasswordEr).toString()} onBlur={handlePasswordBlurError} type={inputValues.showPassword ? 'text': 'password'} value={inputValues.password} placeholder="password..." onChange={event => setInputvalues(prev => ({...prev, password: event.target.value, showPassword: false}))}/>
                                    {inputValues.passwordErr && <ErrorMsg>Please provide your password</ErrorMsg>}
                            
                            <Label htmlFor="email">Email</Label>
                            <Input id='email' type='text' emailerr={(inputValues.emailErr || blurInputErrs.blurEmailEr).toString()} onBlur={handleEmailBlurError} value={inputValues.email} placeholder="email..." onChange={(event) => setInputvalues(prev => ({...prev, email: event.target.value}))}/>
                            {inputValues.emailErr && <ErrorMsg>Please provide your email</ErrorMsg>}
                            <RadioInputContainer>
                                <RadioInput type='radio' id='Male' name='Gender' defaultChecked value={genderObject.male} onChange={changeMaleRadio}/>
                                <RadioLabel htmlFor='Male'>Male</RadioLabel>
                                <RadioInput type='radio' id='Female' name='Gender' value={genderObject.female} onChange={changeFemaleRadio}/>
                                <RadioLabel htmlFor='Female'>Female</RadioLabel>
                            </RadioInputContainer>
                            
                            <InputSubmitBtn loading={inputValues.isLoad.toString()} type='submit'>{inputValues.isLoad ? <Oval color="#fff" height="30" strokeWidthSecondary={6} width="30"/>: 'Create'}</InputSubmitBtn>
                    </InputFeildContainer>
                    <InputImage alt='change name' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1708082876/z2fkh603sdro1uraait5.png'/>
            </InputContainer>
        )}
        </>
    )}


export default CreateUser