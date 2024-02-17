

import { useState } from "react";
import { BsSendCheck } from "react-icons/bs";
import {Oval} from 'react-loader-spinner'

import Navbar from "../Navbar";


import {ContactContainer,
  ContactContentContainer,
  InputFeildContainer, 
  Input, 
  Label, 
  ContactImage, 
  TextArea, 
  SubmitButton,
  Heading,
  ErrorMsg,
  BtnContainer,
  ApiError,
  SuccessText,
  RefreshBtn, SendSuccessContainer, SuccessImage, SuccessTextContainer
} from './StyledComponents'



const ContactUs = () => {
  const [messageData, setMessageData] = useState({
    name: '',
    phoneNumber: '',
    message: '',
    isError: false,
    isSend: false,
    errMsg: '',
    successMsg: '',
    isLoading: false
  })

  const [inputErrors, handleInputErrors] = useState({
    nameError: false,
    numberError: false,
    messageError: false
  })


  const submitForm = async (event) => {
    setMessageData(prev => ({
      ...prev,
      isSend: false,
      isError: false
    }))
    event.preventDefault();
    const {name, phoneNumber, message} = messageData
    if (name === '' && phoneNumber !== '' && message !== '') {
      handleInputErrors({
        nameError: true,
        numberError: false,
        messageError: false
      })
    } else if (name !== '' && phoneNumber === '' && message !== '') {
      handleInputErrors({
        nameError: false,
        numberError: true,
        messageError: false
      })
    } else if (name !== '' && phoneNumber !== '' && message === '') {
      handleInputErrors({
        nameError: false,
        numberError: false,
        messageError: true
      })
    } else if (name === '' && phoneNumber === '' && message === '') {
      handleInputErrors({
        nameError: true,
        numberError: true,
        messageError: true
      })
    } else if (name !== '' && phoneNumber === '' && message === '') {
      handleInputErrors({
        nameError: false,
        numberError: true,
        messageError: true
      })
    } else if (name === '' && phoneNumber !== '' && message === '') {
      handleInputErrors({
        nameError: true,
        numberError: false,
        messageError: true
      })
    } else if (name === '' && phoneNumber === '' && message !== '') {
      handleInputErrors({
        nameError: true,
        numberError: true,
        messageError: false 
      })
    } else {
      handleInputErrors({
        nameError: false,
        numberError: false,
        messageError: false 
      })
      setMessageData(prev => ({
        ...prev,
        isLoading: true,
      }))
      
      try {
        const url = 'https://lordjesus.onrender.com/send-message'
        const messageDetails = {
          name: messageData.name,
          number: messageData.phoneNumber,
          message: messageData.message
        }
        const options = {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(messageDetails)
      }
      
        const response = await fetch(url, options)
        const data =  await response.json()
        if (response.ok) {
          setMessageData(prev => ({
            ...prev,
            isLoading: false,
            isSend: true,
            isError: false,
            successMsg: data.successMsg,
            message: '',
            phoneNumber: '',
            name: ''
          }))
        } else {
          setMessageData(prev => ({
            ...prev,
            isLoading: false,
            isSend: false,
            isError: true,
            errMsg: data.err_msg,
          }))
        }
      } catch (e) {
        setMessageData(prev => ({
          ...prev,
          isLoading: false,
          isSend: false,
          isError: true,
          errMsg: "Sorry there is some network issue",
        }))
      }
      
    }
  }

  const onChangeName = (event) => {
    setMessageData(prev => ({
      ...prev,
      name: event.target.value,
    }))
  }

  const onChangeNumber = event => {
    setMessageData(prev => ({
      ...prev,
      phoneNumber: event.target.value,
    }))
  }

  const onChangeMessage = event => {
    setMessageData(prev => ({
      ...prev,
      message: event.target.value
    }))
  }

  const refresh = () => {
    setMessageData({
      name: '',
      phoneNumber: '',
      message: '',
      isError: false,
      isSend: false,
      errMsg: '',
      successMsg: '',
      isLoading: false
    })
  }

  const sendSuccessView = () => {
    const {successMsg} = messageData
    return (
       <SendSuccessContainer>
          <SuccessTextContainer>
              <SuccessText>{successMsg}</SuccessText>
              <RefreshBtn type='button' onClick={refresh}>Resend</RefreshBtn>
          </SuccessTextContainer>
            <SuccessImage alt='Msg Success' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707399402/nbefl4ys9wguhr3nvyaq.png'/>
       </SendSuccessContainer>
  )}

 
  return (
      <ContactContainer>
        <Navbar/>
        
        {messageData.isSend ? (sendSuccessView()) : (
          <>
          <Heading>Send Message</Heading>
          <ContactContentContainer>
          <InputFeildContainer onSubmit={submitForm}>
          {messageData.isSend && <SuccessText><BsSendCheck className="tick"/>{messageData.successMsg}</SuccessText>}
              <Label htmlFor="name">Name</Label>
              <Input id='name' type='text' nameEr={inputErrors.nameError} value={messageData.name} placeholder="Name..." onChange={onChangeName}/>
              {inputErrors.nameError && <ErrorMsg>please provide your name</ErrorMsg>}
              <Label htmlFor="phone">Phone Number</Label>
              <Input id='phone' type='text' numEr={inputErrors.numberError} value={messageData.phoneNumber} placeholder="Phone Number..." onChange={onChangeNumber}/>
              {inputErrors.numberError && <ErrorMsg>please provide your phone number</ErrorMsg>}
              <Label htmlFor="message">Message</Label>
              <TextArea id="message" msgEr={inputErrors.messageError} placeholder="Message..." value={messageData.message} onChange={onChangeMessage}/>
              {inputErrors.messageError && <ErrorMsg>please provide your request message</ErrorMsg>}
              <BtnContainer>
                {messageData.isError && <ApiError>{messageData.errMsg}</ApiError>}
                <SubmitButton load={messageData.isLoading} type="submit">{messageData.isLoading ? <Oval color="rgb(46, 42, 72)" height="30" strokeWidthSecondary={6} width="30"/> : 'Submit'}</SubmitButton>
              </BtnContainer>
              
          </InputFeildContainer>
          <ContactImage alt='contact' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707382917/fvzaaqr65zwql8jqrqbm.png'/>
          </ContactContentContainer>
          </>
        )}
      </ContactContainer>
      
)
      }
    

export default ContactUs