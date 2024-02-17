import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {Popup} from 'reactjs-popup'
import {Oval} from 'react-loader-spinner'
import {Skeleton} from 'react-skeleton-generator'
import { BiError } from "react-icons/bi";
import { TiCancel } from "react-icons/ti";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { MdDelete } from "react-icons/md";
import { TbPlayerTrackNext } from "react-icons/tb";
import { TbPlayerTrackPrev } from "react-icons/tb";

import Swal from 'sweetalert2'

import {
    UsersListContainer, 
    ImageUser, 
    User, 
    UserName, 
    DeleteBtn, 
    Heading,
    PagenationContainer,
    PrevButton, 
    FailureContainer,
    ErrorMessage,
    NextButton,
    PopupContainer,
    BtnContainer,
    Button,
    ConfirmText,
    UserFailureContainer, 
    NotFoundImage,
    NotFoundText,
    NotFoundTextContainer,
    BackButton
} from './StyledComponents'


const apiStatusConstants = {
    initial: 'INITIAL',
    inProgress: 'IN_PROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
  }

const rootUsers = ['Agastin', "Christopher", "Daniel"]

const UsersList = () => {
    const [apiResponseData, setApiResponseData] = useState({
         status: apiStatusConstants.initial,
         usersDataArray: [],
         deleteUser: '',
         deleteErr: false
    })

    const getUsersData = async () => {
        setApiResponseData(prev => ({
            ...prev,
            status: apiStatusConstants.inProgress
        }))
        const url = 'https://lordjesus.onrender.com/users'
            const jwtToken = Cookies.get('jwt_token')
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`
                },
            }
            try {
                 const response = await fetch(url, options)
                 const data = await response.json()
                 if (response.ok) {
                    
                    setApiResponseData(prev => ({
                        ...prev,
                        status: apiStatusConstants.true,
                        usersDataArray: data
                    }))
                 } else {
                    setApiResponseData(prev => ({
                        ...prev,
                        status: apiStatusConstants.failure,
                    }))
                 }
            } catch (e) {
                setApiResponseData(prev => ({
                    ...prev,
                    status: apiStatusConstants.failure,
                    
                }))
            }
    }

    const renderFailureView = () => (
        <FailureContainer>
            <BiError color='#cc2d4d' size={60}/>
            <ErrorMessage>Fetching failed</ErrorMessage>
        </FailureContainer>
    )

    const sweetAlert = () => {
        Swal.fire({
            text: "Sorry you are the main user of LJCPC, you want to delete your account please proceed on backend",
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

    useEffect(() => {
              getUsersData()
    }, [])

    const [currentPage, setCurrentPage] = useState(1)

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    }
    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    }
    const skeletonLoaderView = () => (
        <>
             <User style={{background: 'rgb(247,236,232)', backgroundImage: 'linear-gradient(90deg, rgba(247,236,232,0.6728816526610644) 0%, rgba(246,233,233,0.6112570028011204) 67%, rgba(231,224,223,0.6924894957983193) 100%)'}}>
                    <Skeleton width='50px' height='50px' borderRadius="50%" style={{marginTop: 10, alignSelf: 'flex-start', marginRight: 20}}/>
                    {/* <ImageUser alt='user name' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1708079357/qreozwbe5ymyldns0lrk.png'/> */}
                    <Skeleton width='40%' height='30px' borderRadius="10px" style={{marginTop: 20,  alignSelf: 'flex-start'}}/>
                    {/* <UserName>Daniel</UserName> */}
                    <Skeleton width='20px' height='30px' borderRadius="5px" style={{ marginLeft: 'auto'}}/>
                    {/* <DeleteBtn><MdDelete/></DeleteBtn> */}
                </User>
                <User style={{background: 'rgb(247,236,232)', backgroundImage: 'linear-gradient(90deg, rgba(247,236,232,0.6728816526610644) 0%, rgba(246,233,233,0.6112570028011204) 67%, rgba(231,224,223,0.6924894957983193) 100%)'}}>
                    <Skeleton width='50px' height='50px' borderRadius="50%" style={{marginTop: 10, alignSelf: 'flex-start', marginRight: 20}}/>
                    {/* <ImageUser alt='user name' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1708079357/qreozwbe5ymyldns0lrk.png'/> */}
                    <Skeleton width='40%' height='30px' borderRadius="10px" style={{marginTop: 20,  alignSelf: 'flex-start'}}/>
                    {/* <UserName>Daniel</UserName> */}
                    <Skeleton width='20px' height='30px' borderRadius="5px" style={{ marginLeft: 'auto'}}/>
                    {/* <DeleteBtn><MdDelete/></DeleteBtn> */}
                </User>
                <User style={{background: 'rgb(247,236,232)', backgroundImage: 'linear-gradient(90deg, rgba(247,236,232,0.6728816526610644) 0%, rgba(246,233,233,0.6112570028011204) 67%, rgba(231,224,223,0.6924894957983193) 100%)'}}>
                    <Skeleton width='50px' height='50px' borderRadius="50%" style={{marginTop: 10, alignSelf: 'flex-start', marginRight: 20}}/>
                    {/* <ImageUser alt='user name' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1708079357/qreozwbe5ymyldns0lrk.png'/> */}
                    <Skeleton width='40%' height='30px' borderRadius="10px" style={{marginTop: 20,  alignSelf: 'flex-start'}}/>
                    {/* <UserName>Daniel</UserName> */}
                    <Skeleton width='20px' height='30px' borderRadius="5px" style={{ marginLeft: 'auto'}}/>
                    {/* <DeleteBtn><MdDelete/></DeleteBtn> */}
                </User>
                <User style={{background: 'rgb(247,236,232)', backgroundImage: 'linear-gradient(90deg, rgba(247,236,232,0.6728816526610644) 0%, rgba(246,233,233,0.6112570028011204) 67%, rgba(231,224,223,0.6924894957983193) 100%)'}}>
                    <Skeleton width='50px' height='50px' borderRadius="50%" style={{marginTop: 10, alignSelf: 'flex-start', marginRight: 20}}/>
                    {/* <ImageUser alt='user name' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1708079357/qreozwbe5ymyldns0lrk.png'/> */}
                    <Skeleton width='40%' height='30px' borderRadius="10px" style={{marginTop: 20,  alignSelf: 'flex-start'}}/>
                    {/* <UserName>Daniel</UserName> */}
                    <Skeleton width='20px' height='30px' borderRadius="5px" style={{ marginLeft: 'auto'}}/>
                    {/* <DeleteBtn><MdDelete/></DeleteBtn> */}
                </User>
        </>
    )

    const deleteUser = async (username) => {
        // app.delete("/users", checkAuthentication, async(request, response) => {
        //     const {username} = request.body
        //     const deleteUserQuery = `DELETE FROM user WHERE username="${username}";`
        //     await db.run(deleteUserQuery)
        //     response.send({successMsg: 'Delete user successfully'})
        //   })
        if (username ===  'Agastin') {
            sweetAlert()
        } else {
            setApiResponseData(prev => ({
                ...prev,
                deleteUser: username
            }))
            try {
                const deleteUrl = 'https://lordjesus.onrender.com/users'
                const userDetails = {
                    username,
                }
                const jwtToken = Cookies.get('jwt_token')
                const options = {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwtToken}`
                    },
                    body: JSON.stringify(userDetails)
                }
                const response = await fetch(deleteUrl, options)
                if (response.ok) {
                    const filteredData = apiResponseData.usersDataArray.filter((item) => item.username !== username)
                    setApiResponseData(prev => ({
                        ...prev,
                        deleteUser: '',
                        usersDataArray: filteredData
                    }))
                } else {
                    setApiResponseData(prev => ({
                        ...prev,
                        deleteUser: '',
                        deleteErr: true
                    }))
                }
            } catch (e) {
                setApiResponseData(prev => ({
                    ...prev,
                    deleteUser: '',
                    deleteErr: true
                }))
            }
        }
        
    }

    const refresh = () => {
              setApiResponseData({
                status: apiStatusConstants.initial,
                usersDataArray: [],
                deleteUser: '',
                deleteErr: false
              })
              getUsersData()
    }

    const startIndex = (currentPage - 1) * 4;
    const endIndex = startIndex + 4;


    return (
       <>
          <Heading>Users list</Heading>
          
          
          {
            apiResponseData.status === apiStatusConstants.failure ? (
                renderFailureView()
            ) : apiResponseData.deleteErr ? (
                <UserFailureContainer>
                    <NotFoundImage alt='previous name error' src="https://res.cloudinary.com/dkrpgt9kd/image/upload/v1708081660/z8ldbbkea2rzalwagrzr.png"/>
                    <NotFoundTextContainer>
                        <NotFoundText>Sorry there is some network issue</NotFoundText>
                        <BackButton type='button' onClick={refresh}>Back</BackButton>
                    </NotFoundTextContainer>
                </UserFailureContainer> )
                : (
                  <>
                <Skeleton.SkeletonThemeProvider highlight="dark" animationDuration={1} color="#c3c7c5" style={{alignSelf: 'center', width: '90%'}}>
                <UsersListContainer>
                   {apiResponseData.status === apiStatusConstants.inProgress ? (
                      skeletonLoaderView()
                   ) : ( 
                        apiResponseData.usersDataArray.slice(startIndex, endIndex).map(item => (
                            <User key={item.username}>
                                <ImageUser alt={item.username} src={item.gender === 'FEMALE' ? 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1708079357/qreozwbe5ymyldns0lrk.png' : 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707641841/bvhi9ypcmixrzolb1kfs.png'}/>
                                <UserName root={(rootUsers.includes(item.username)).toString()}>{item.username}</UserName>
  
                                <Popup modal trigger={
                                              <DeleteBtn type='button'>{apiResponseData.deleteUser === item.username ? <Oval color="#ffff" height="25" width="25"/> : <MdDelete/>}</DeleteBtn>
                                      }
                                      
                                      >
                                      {close => (
                                          <PopupContainer>
                                          <ConfirmText>Are you sure? you want to delete it</ConfirmText>
                                          <BtnContainer>
                                              <ReactTooltip id='delCancel' place='bottom' className='tool-cancel' delayShow={1000}/>
                                              <Button data-tooltip-id='delCancel' data-tooltip-content={"cancel"} type='button' onClick={() => close()}><TiCancel/></Button>
                                              <ReactTooltip id='del' place='bottom' className='tool-delete' delayShow={1000}/>
                                              <Button delete={'true'} type='button' data-tooltip-id='del' data-tooltip-content={"delete"} onClick={() => {close(); deleteUser(item.username)}}><MdDelete/></Button>
                                          </BtnContainer>
                                       </PopupContainer>
                                      )}
                                  </Popup>
                            </User>
                        ))
                   )}
                </UsersListContainer>
                </Skeleton.SkeletonThemeProvider>
                <PagenationContainer>
                      <ReactTooltip id="back" place="top" className="tool"/>
                      <PrevButton type='button' data-tooltip-id='back' data-tooltip-content={"Previous"} onClick={handlePrevPage} disabled={currentPage === 1}><TbPlayerTrackPrev/></PrevButton>
                      <ReactTooltip id="nextPage" place="right" className="tool"/>
                      <NextButton type='button' data-tooltip-id='nextPage' data-tooltip-content={"Next"} onClick={handleNextPage} disabled={endIndex >= apiResponseData.usersDataArray.length}><TbPlayerTrackNext/></NextButton>
                  </PagenationContainer>
                  </>
            )
          }
        </>
)}

export default UsersList