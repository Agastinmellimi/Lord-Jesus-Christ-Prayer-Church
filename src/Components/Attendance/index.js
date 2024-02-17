import { useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import Cookies from "js-cookie";
import Swal from 'sweetalert2'
import {ThreeDots, Oval} from 'react-loader-spinner'
import { FaCircle } from "react-icons/fa";
import { BiError } from "react-icons/bi";

import ChurchNavbar from "../ChurchNavbar";

import {AttendanceContainer, 
    Heading, 
    HighlatedText,
    ChildrensListContainer,
    ChildrenName,
    ImageChildren,
    Children,
    AttendanceBtn,
    LoadingViewContainer,
    ErrorMessage,
    DateInput,
    DateContainer,
    ChildrenContentContainer,
    DetailsText,
    SeeAttendBtn,
    GirlImage,
    DetailsContainer,
    FailureContainer,
    SubitSuccessContainer,
    SubmitScContentContainer,
    SuccessText,
    SubmitSuccessImage,
    Label
    
} from './StyledComponents'

import 'animate.css';

const apiStatusConstants = {
    initial: 'INITIAL',
    inProgress: 'IN_PROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
  }

const rootUsers = ['Agastin', "Christopher", "Daniel"]

const Attendance = () => {
    const [username, setUsername] = useState('')
    const [apiResponseData, setApiResponseData] = useState({
        status: apiStatusConstants.initial,
        childrenList: [],
        isSubmit: false,
        submitLoad: false,
        submitSuccesMsg: ''
    })
    const [date, setDate] = useState('')
    const navigate = useNavigate()

    const getChildrenList = async () => {
        setApiResponseData(prev => ({
            ...prev,
            status: apiStatusConstants.inProgress
        }))
         try {
            const url = "https://lordjesus.onrender.com/children"
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const response = await fetch(url, options)
            const data = await response.json()
            if (response.ok) {
                setApiResponseData(prev => ({
                    ...prev,
                    status: apiStatusConstants.success,
                    childrenList: data.map(item => ({...item, isPresent: false})).sort((a, b) => {
                        let nameA = a.name.toUpperCase(); // ignore upper and lowercase
                        let nameB = b.name.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                        return -1;
                        }
                        if (nameA > nameB) {
                        return 1;
                        }
                        // names must be equal
                        return 0;
                    })
                }))
            
            } else {
                setApiResponseData(prev => ({
                    ...prev,
                    status: apiStatusConstants.failure,
                }))
            }
         } catch (err) {
            setApiResponseData(prev => ({
                ...prev,
                status: apiStatusConstants.failure,
            }))
         }

    }

    const callSweetAlert = (errText) => {
        Swal.fire({
            title: errText,
            color: '#ba3037', 
            icon: 'warning',
            confirmButtonText: 'Continue'
        });
    }


    useEffect(() => {
        const user = Cookies.get('username')
        setUsername(user)
        getChildrenList()
    }, [])

    const buttonClick = async (id) => {
        if (date === '') {
            callSweetAlert("Please select the date")
        } else {
            const filteredList = apiResponseData.childrenList.map(item => {
                if (item.id === id) {
                    return {...item, isPresent: !item.isPresent}
                } else {
                    return {...item}
                }
            })
            setApiResponseData(prev => ({
                ...prev,
                childrenList: filteredList
            }))
                  
        }
                
            
        }
    

    const renderFailureView = () => (
        <FailureContainer>
            <BiError color='#cc2d4d' size={60}/>
            <ErrorMessage>Fetching failed</ErrorMessage>
        </FailureContainer>
    )

    const renderLoadingView = () => (
        <LoadingViewContainer>
          <ThreeDots  color="#C5AE5E" height="50" width="50" />
        </LoadingViewContainer>
      )


    const renderSuccessView = () => {
        const onChangeDate = (event) => {
            setDate(event.target.value)
            if (event.target.value === '') {
                const filteredList = apiResponseData.childrenList.map(item => ({...item, isPresent: false}))
                setApiResponseData(prev => ({...prev, childrenList: filteredList}))
            } else {
                const filteredList = apiResponseData.childrenList.map(item => ({...item, date: event.target.value}))
                setApiResponseData(prev => ({
                    ...prev,
                    childrenList: filteredList
                }))
            }
        }

        const navigateViewDetails = () => {
            navigate('/view-attendance')
        }

        const sweetAlert = () => {
            Swal.fire({
                text: "Sorry only root users can do submit attendance",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                },
                color: '#b8564f',
                fontSize: '20px'
              });
        }

        const sumbitAttendance = async () => {
            
            
            const {childrenList} = apiResponseData
            console.log(childrenList)
            if (date === '') {
                    callSweetAlert("Please Select date, and submit")
            } else {
                const currentDate = new Date()
                const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
                const sendDate = date.split('-')
                
                    const checkCurrentDate = formattedDate.split("-")[2] === `${parseInt(sendDate[2])}`
                const checkYear = formattedDate.split('-')[0] === sendDate[0]
                const checkMonth = formattedDate.split('-')[1] === `${parseInt(sendDate[1])}`
                if (checkCurrentDate && checkMonth && checkYear) {
                        const user = Cookies.get('username')
                        if (rootUsers.includes(user)) {
                            setApiResponseData(prev => ({
                                ...prev,
                                submitLoad: true,
                                
                            }))
                            try {
                                const {childrenList} = apiResponseData
                                const modifiedData = childrenList.map(item => ({
                                        childId: item.id,
                                        date: item.date,
                                        present: item.isPresent
                                    }))
                                const childrenDetails = {
                                        array: modifiedData,
                                    }
                                const jwtToken = Cookies.get('jwt_token')
                                const options = {
                                        method: "POST",
                                        headers: {
                                            "Content-Type" : "application/json",
                                            Authorization: `Bearer ${jwtToken}`,
                                        },
                                        body: JSON.stringify(childrenDetails)
                                }
                                const attendanceUrl = 'https://lordjesus.onrender.com/attendance'
                                const response = await fetch(attendanceUrl, options)
                                const data = await response.json()
                                if (response.ok) {
                                        setApiResponseData(prev => ({
                                            ...prev,
                                            isSubmit: true,
                                            submitLoad: false,
                                            submitSuccesMsg: data.successMsg
                                        }))
                                } else {
                                        setApiResponseData(prev => ({
                                            ...prev,
                                            isSubmit: false,
                                            submitLoad: false,
                                            
                                        }))
                                }
                           } catch (err) {
                                setApiResponseData(prev => ({
                                    ...prev,
                                    isSubmit: false,
                                    submitLoad: false,
                                }))
                           }
                        
                                
                        } else {
                            sweetAlert()
                        }
                } else {
                    callSweetAlert("Please select present date")
                }
            }
        }
        
        const clickBack = () => {
            setApiResponseData(prev => ({
                   ...prev,
                   isSubmit: false,
                   submitLoad: false,
                   submitSuccesMsg: '',
            }))
            setDate('')
            getChildrenList()
        }

         return (
            <>
            {apiResponseData.isSubmit === false && <Heading>Hi <HighlatedText style={{color: username === "Agastin" && '#2ed95e'}}>{username}</HighlatedText>, Set your children attendance here.</Heading>}
            {apiResponseData.isSubmit ? (
                <SubitSuccessContainer>
                    <SubmitSuccessImage alt='Submit Success' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707387519/qe1bvxmnaduguqa07cyy.png'/>
                    <SubmitScContentContainer>
                        <SuccessText>{apiResponseData.submitSuccesMsg}</SuccessText>
                        <SeeAttendBtn type='button' onClick={clickBack}>Back</SeeAttendBtn>
                    </SubmitScContentContainer>
                </SubitSuccessContainer>
            ) : (
                <>
                    <DateContainer>
                        <Label htmlFor='date'>date</Label>
                        <DateInput id='date' type='date' value={date} placeholder="mm/dd/yyyy" onChange={onChangeDate}/>
                    </DateContainer>
                    
                    <ChildrensListContainer>
                        {apiResponseData.childrenList.map(item => (
                            <Children key={item.id} active={item.isPresent}>
                                    <ImageChildren alt='childrenImage'
                                    src={item.gender === "MALE" ? 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1706681450/a1rmhceyfccwmj04gn9g.png' : "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1706681443/uybys3x9m2u9rvm2wiiz.png"}
                                    />
                                    <ChildrenName>{item.name}</ChildrenName>
                                    <AttendanceBtn type="button" active={item.isPresent} onClick={() => buttonClick(item.id)}><FaCircle/></AttendanceBtn>
                            </Children>
                        ))}
                        <SeeAttendBtn load={apiResponseData.submitLoad} type='button' sub onClick={sumbitAttendance}>{apiResponseData.submitLoad ? <Oval color="#2a2c47" strokeWidthSecondary={7} height="28" width="28" strokeWidth={0}/> : "Submit"}</SeeAttendBtn>
                    </ChildrensListContainer>
              </>
            )}
            <ChildrenContentContainer>
                <DetailsContainer>
                <DetailsText>If your compleated the children attendance details, See Attendance details here</DetailsText>
                <SeeAttendBtn type='button' onClick={navigateViewDetails}>Go to details</SeeAttendBtn>
                </DetailsContainer>
                <GirlImage alt='See Details' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707467385/n452wmry4p32euhx651n.png'/>
            </ChildrenContentContainer>
            </>
        )
    }

    const renderHomeView = () => {
        const {status} = apiResponseData
    
        switch (status) {
          case apiStatusConstants.inProgress:
            return renderLoadingView()
          case apiStatusConstants.success:
            return renderSuccessView()
          case apiStatusConstants.failure:
            return renderFailureView()
          default:
            return null
        }
      }

    return (
     <AttendanceContainer>
        <ChurchNavbar/>
       {renderHomeView()}
     </AttendanceContainer>
)}

export default Attendance