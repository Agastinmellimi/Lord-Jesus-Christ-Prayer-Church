import { useEffect, useState} from "react";
import HandlerContext from "../../Context/HandlerContext";
import {useNavigate} from 'react-router-dom'
import Cookies from "js-cookie";
import {Popup} from 'reactjs-popup'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { BiError } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";
import ChurchNavbar from "../ChurchNavbar";
import ChangeUsername from "../ChangeUsername";
import ChangePassword from "../ChangePassword";
import ChangeEmail from "../ChangeEmail";
import CreateUser from "../CreateUser";
import UsersList from "../UsersList";
import {Skeleton} from 'react-skeleton-generator'



import {Container, 
    ProfileContainer, 
    ProfileContetContainer, 
    ProfileImage, 
    ConfirmText,
    LogButton,
    PopupContainer,
    LogBtnContainer,
    Username, 
    Email,
    HighlatedText,
    BtnContainer,
    Button,
    NameContainer,
    LogoutBtn,
    FailureContainer,
    ErrorMessage
} from './StyledComponents'
import 'reactjs-popup/dist/index.css';
import 'animate.css';



const apiStatusConstants = {
    initial: 'INITIAL',
    inProgress: 'IN_PROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
  }

const buttonStatus = {
    initial: '',
    changeUsername: 'CHANGE_USERNAME',
    changePassword: 'CHANGE_PASSWORD',
    changeEmail: 'CHANGE_EMAIL',
    createUser: 'CREATE_USER',
    usersList: 'USERS_LIST'
}
const rootUsers = ['Agastin', "Christopher", "Daniel"]

const Profile = () => {
     const [apiResponseData, setApiResponseData] = useState({
        status: apiStatusConstants.initial,
        userDetails: {},
        activeTab: buttonStatus.initial
     })

     const navigate = useNavigate()

     const getUserDetails = async () => {
        setApiResponseData(prev => ({
            ...prev,
            status: apiStatusConstants.inProgress
        }))
        const username = Cookies.get('username')
        const userObject = {
            username,
        }
        
        try {
            const url = 'https://lordjesus.onrender.com/user-details'
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userObject)
            }
    
            const response = await fetch(url, options)
            const data = await response.json()
            if (response.ok) {
                
                setApiResponseData(prev => ({
                    ...prev,
                    status: apiStatusConstants.success,
                    userDetails: data
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

     useEffect(() => {
            getUserDetails()
     }, [])

     const renderFailureView = () => (
        <FailureContainer>
            <BiError color='#cc2d4d' size={60}/>
            <ErrorMessage>Fetching failed</ErrorMessage>
        </FailureContainer>
    )



     const renderActiveButtonView = () => {
        const {activeTab} = apiResponseData
        

        switch (activeTab) {
            case buttonStatus.changeUsername:
                return <ChangeUsername functionCall={getUserDetails}/>
            case buttonStatus.changePassword:
                return <ChangePassword/>
            case buttonStatus.changeEmail:
                return <ChangeEmail callFunction={getUserDetails}/>
            case buttonStatus.createUser: 
                return <CreateUser />
            case buttonStatus.usersList:
                return <UsersList/>
            
            default: 
                return null
        }
     }

     
    
    return (
       <HandlerContext.Consumer>
           {value => {
                const {setActiveTab} = value
                const clickLogout = () => {
                    Cookies.remove('jwt_token')
                    Cookies.remove('username')
                    setActiveTab("Home")
                    navigate('/')
                 }
                return (
                    <Skeleton.SkeletonThemeProvider highlight="dark" animationDuration={1} color="#C0C0C0">
                    <Container>
                        <ChurchNavbar/>
                        {apiResponseData.status === apiStatusConstants.failure ? (renderFailureView()) : (
                                   <ProfileContainer>
                            
                                   {apiResponseData.status === apiStatusConstants.inProgress ? (<Skeleton width='70px' height='70px' borderRadius="50%" style={{marginRight: 19}}/>) : (
                                       <ProfileImage alt={apiResponseData.userDetails.username} src={apiResponseData.userDetails.gender === 'FEMALE' ? "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1708079357/qreozwbe5ymyldns0lrk.png":'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707641841/bvhi9ypcmixrzolb1kfs.png'}/>
                                   )}
                                   
                                  
                                   <ProfileContetContainer>
                                      {apiResponseData.status === apiStatusConstants.inProgress ? (
                                          <Skeleton widthMultiple={['50%', '70%']} heightMultiple={['30px', '15px']} count={2} style={{borderRadius: '8px', marginBottom: 10}} />
                                      ):(
                                       <>
                                        <NameContainer>
                                           <Username>{apiResponseData.userDetails.username}</Username>
                                           <ReactTooltip id='logout' className="tool-delete" delayShow={1000} place='top'/>
                                           <Popup modal trigger={
                                                   <LogoutBtn data-tooltip-id="logout" data-tooltip-content={'Logout'} type='button'><IoLogOut/></LogoutBtn>  
                                                }
                                                
                                                >
                                                  {close => (
                                                    <PopupContainer>
                                                       <ConfirmText>Are you sure? you want to Logout from <HighlatedText style={{color: '#0b7543', fontWeight: 'bolder'}}>LJCPC</HighlatedText></ConfirmText>
                                                       <LogBtnContainer>
                                                           <LogButton  type='button' onClick={() => close()}>cancel</LogButton>
                                                           <LogButton logout={'true'} type='button' onClick={clickLogout}>confirm</LogButton>
                                                       </LogBtnContainer>
                                                    </PopupContainer>
                                                  )}
                                               </Popup>
                                        </NameContainer>
                                           <Email><HighlatedText>email:</HighlatedText> {apiResponseData.userDetails.email}</Email>
                                       </>
                                      )}
                                       
                                       <hr style={{width: "100%", marginTop: 0, border: "1px solid #c3d0e6"}}/>
                                       <BtnContainer>
                                           {apiResponseData.status === apiStatusConstants.inProgress ? (
                                               <Skeleton widthMultiple={['190px', '190px', '230px', '160px', '180px']} heightMultiple={['30px', '30px', '30px', '30px', '30px']} count={5} style={{borderRadius: '8px', marginRight: 15}} />
                                           ) : (
                                             <>
                                               <Button active={(apiResponseData.activeTab === buttonStatus.changeUsername).toString()} type='button' onClick={() => setApiResponseData(prev => ({...prev, activeTab: buttonStatus.changeUsername}))}>Change name</Button>
                                               <Button active={(apiResponseData.activeTab === buttonStatus.changePassword).toString()} type='button' onClick={() => setApiResponseData(prev => ({...prev, activeTab: buttonStatus.changePassword}))}>Change password</Button>
                                               <Button active={(apiResponseData.activeTab === buttonStatus.changeEmail).toString()} type='button' onClick={() => setApiResponseData(prev => ({...prev, activeTab: buttonStatus.changeEmail}))}>Change email</Button>
                                               {rootUsers.includes(apiResponseData.userDetails.username) && <Button active={(apiResponseData.activeTab === buttonStatus.createUser).toString()} type='button' onClick={() => setApiResponseData(prev => ({...prev, activeTab: buttonStatus.createUser}))}>Create user</Button>}
                                               {rootUsers.includes(apiResponseData.userDetails.username) && <Button active={(apiResponseData.activeTab === buttonStatus.usersList).toString()} type='button' onClick={() => setApiResponseData(prev => ({...prev, activeTab: buttonStatus.usersList}))}>Users list</Button>}
                                             </>
                                           )}
                                          
                                          
                                       </BtnContainer>
                                        </ProfileContetContainer>
                                       
                                    </ProfileContainer>
                        )}
                        {renderActiveButtonView()}
                        
                    </Container>
                    </Skeleton.SkeletonThemeProvider>
                )
           }}
       </HandlerContext.Consumer>
)}

export default Profile