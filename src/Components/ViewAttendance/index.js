
import {useState, useEffect} from 'react'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import {ThreeDots} from 'react-loader-spinner'
import { FaSearch } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import { FcOk, FcCancel } from "react-icons/fc";
import { Tooltip as ReactTooltip } from 'react-tooltip'


import Navbar from '../Navbar'

import {
    ViewContainer, Heading, 
    HighlatedText, 
    ViewChildrenContainer, 
    AttendanceCount,  
    ChildrenStatus, 
    FirstLetterContainer, 
    ChildrenName, 
    Presents,
    ErrorMessage,
    LoadingViewContainer,
    FailureContainer,
    SelectDateContainer,
    SelctDateHead,
    DateContainer,
    SelectDateText,
    DateImage,
    DailyStatusChildern,
    SeeAttendBtn,
    BtnContainer,
    SearchDataContainer,
    SearchBtn,
    SearchDateInput
} from './StyledComponents'

const apiStatus = {
    initial: 'INITIAL',
    inProgress: 'IN_PROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
}

const ViewAttendance = () => {
    const [apiResponseData, setApiResponseData] = useState({
          childrenStatus: apiStatus.initial,
          childrenStatusArray: [],
          datesViseApiStatus: apiStatus.initial,
          dateError: false,
          dateApiLoading: false,
          datesArray: [],
          dateViceDetailsArray: []
    })
    const navigate = useNavigate()

    const [searchDate, setSearchDate] = useState('')

    const [searchErr, handleSearchErr] = useState(false)

    const [isSearch, handleSearch] = useState(false)

    const getAllChildrenAttendanceDetails = async () => {
        setApiResponseData(prev => ({
            ...prev,
            childrenStatus: apiStatus.inProgress
        }))
        try {
            const url = 'https://lordjesus.onrender.com/attendance-details'
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
                    childrenStatusArray: data,
                    childrenStatus: apiStatus.success
                }))
            } else {
                setApiResponseData(prev => ({
                    ...prev,
                    childrenStatus: apiStatus.failure
                }))
            }
        } catch (err) {
            setApiResponseData(prev => ({
                ...prev,
                childrenStatus: apiStatus.failure
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

    const getDistinctDates = async () => {
        setApiResponseData(prev => ({
            ...prev,
            dateError: false,
            dateApiLoading: true
        }))
       try {
                const DatesUrl = 'https://lordjesus.onrender.com/attendance-dates'
                const options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                } 
                const response = await fetch(DatesUrl, options)
                const data = await response.json() 
                if (response.ok) {
                    const filteredData = data
                    filteredData.unshift({text: 'Select'})
                    setApiResponseData(prev => ({
                        ...prev,
                        dateApiLoading: false,
                        dateError: false,
                        datesArray: filteredData
                    }))
                } else {
                    setApiResponseData(prev => ({
                        ...prev,
                        dateApiLoading: false,
                        dateError: true
                    }))
                }
       } catch (err) {
            setApiResponseData(prev => ({
                ...prev,
                dateApiLoading: false,
                dateError: true
            }))
       }

    }

    const getDateViceDetails = async (value) => {
        setApiResponseData(prev => ({
            ...prev,
            datesViseApiStatus: apiStatus.inProgress
        }))
       try {
                const attendanceUrl = 'https://lordjesus.onrender.com/date-attendance'
                
                const dateOject = {
                    date: value
                }
                
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dateOject)
                }
                const response = await fetch(attendanceUrl, options)
                const data = await response.json()
                if (response.ok) {
                    setApiResponseData(prev => ({
                        ...prev,
                        datesViseApiStatus: apiStatus.success,
                        dateViceDetailsArray: data
                    }))
                } else {
                    setApiResponseData(prev => ({
                        ...prev,
                        datesViseApiStatus: apiStatus.failure,
                    }))
                }
       } catch (e) {
                setApiResponseData(prev => ({
                    ...prev,
                    datesViseApiStatus: apiStatus.failure,
                }))
       }
    }


    useEffect(() => {
            getDistinctDates()
            getAllChildrenAttendanceDetails()
    }, [])

    const renderFailureView = () => (
        <FailureContainer>
            <BiError color='#cc2d4d' size={60}/>
            <ErrorMessage>Fetching failed</ErrorMessage>
        </FailureContainer>
    )

    const renderLoadingView = () => (
        <LoadingViewContainer>
          <ThreeDots  color="rgb(99, 222, 214)" height="50" width="50" />
        </LoadingViewContainer>
      )

    const renderSuccessChildrensStatusView = () => (
        <ViewChildrenContainer>
            {apiResponseData.childrenStatusArray.map(item => (
                 <ChildrenStatus key={item.name} count={item.presents}>
                    <FirstLetterContainer>{item.name[0].toUpperCase()}</FirstLetterContainer>
                    <ChildrenName>{item.name}</ChildrenName>
                    <Presents>presents: <AttendanceCount count={item.presents}>{item.presents}</AttendanceCount></Presents>
                </ChildrenStatus>
            ))}
        </ViewChildrenContainer>
    )

    const renderDateViceChildernStatusView = () => {
        const navigateAttendance = () => {
            navigate('/attendance')
        }
        return (
        <>
        <ViewChildrenContainer>
            {apiResponseData.dateViceDetailsArray.map(item => (
            <DailyStatusChildern key={item.name} present={item.presents}>
                    <FirstLetterContainer >{item.name[0].toUpperCase()}</FirstLetterContainer>
                    <ChildrenName>{item.name}</ChildrenName>
                    <Presents>{item.presents === 1 ? <FcOk size={25}/> : <FcCancel size={25}/>}</Presents>
            </DailyStatusChildern>
            ))}
        </ViewChildrenContainer>
        <BtnContainer>
            <SeeAttendBtn type='button' onClick={navigateAttendance}>
                Go to Attendance
            </SeeAttendBtn>
        </BtnContainer>
        </>
    )}

    const renderDateViceAttendanceView = () => {
        const {datesViseApiStatus} = apiResponseData
    
        switch (datesViseApiStatus) {
          case apiStatus.inProgress:
            return renderLoadingView()
          case apiStatus.success:
            return renderDateViceChildernStatusView()
          case apiStatus.failure:
            return renderFailureView()
          default:
            return null
        }
      }

      const renderAttendanceDetailsView = () => {
        const {childrenStatus} = apiResponseData
    
        switch (childrenStatus) {
          case apiStatus.inProgress:
            return renderLoadingView()
          case apiStatus.success:
            return renderSuccessChildrensStatusView()
          case apiStatus.failure:
            return renderFailureView()
          default:
            return null
        }
      }


      const changeDate = event => {
        setSearchDate(event.target.value)
        if (event.target.value === '') {
            handleSearch(false)
        }
      }

      const onSearchDate = () => {
        if (searchDate === '') {
             callSweetAlert('Please Seact Date')
        } else {
            handleSearch(true)
            const filteredDatesArray = apiResponseData.datesArray.map(item => item.date !== undefined && item.date)
            if (filteredDatesArray.includes(searchDate)) {
                handleSearchErr(false)
                getDateViceDetails(searchDate)
            } else {
                handleSearchErr(true)
            }
        }
      }

    return (
    <ViewContainer>
        <Navbar/>
        <Heading><HighlatedText>Children</HighlatedText> Attendance Details</Heading>
        {renderAttendanceDetailsView()}
        {apiResponseData.dateError ? renderFailureView() : (
            <>
            <SelectDateContainer>
                <SelctDateHead>Attendance details by Dates</SelctDateHead>
                <SearchDataContainer>
                    <SearchDateInput type='date' value={searchDate} placeholder='YYYY/MM/DD' onChange={changeDate}/>
                    <ReactTooltip id='searchDate' place='bottom' className='tool'/>
                    <SearchBtn type='button' data-tooltip-id='searchDate' data-tooltip-content={"Search by Date"} onClick={onSearchDate}><FaSearch/></SearchBtn>
                </SearchDataContainer>
            </SelectDateContainer>
           
            {isSearch ? (
                searchErr ? (
                    <DateContainer>
                        <DateImage alt='select date' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707990706/k3yuvyjhdhdr0kqirv7j.png'/>
                        <SelectDateText>Your search date cannot in backend</SelectDateText>
                    </DateContainer>
                ) : renderDateViceAttendanceView()
            ) : (
                <DateContainer>
                        <DateImage alt='select date' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707387748/osvdlza4aoktm32p5et5.png'/>
                        <SelectDateText>Search date and get your details</SelectDateText>
                </DateContainer>
            )}
            </>
        )}
    </ViewContainer>
)}

export default ViewAttendance
