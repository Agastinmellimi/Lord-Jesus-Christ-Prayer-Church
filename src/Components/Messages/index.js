import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import {ThreeDots, Oval} from 'react-loader-spinner'
import { BiError } from "react-icons/bi";
import { TbPlayerTrackNext } from "react-icons/tb";
import { TbPlayerTrackPrev } from "react-icons/tb";

import { AiTwotoneDelete } from "react-icons/ai";

import 'animate.css';

import {MessagesContainer, 
    MessagesHeading, 
    HighlatedText,
    FirstLetterContainer,
    MessageContentContainer,
    Name,
    Description,
    MessagesListContainer, 
    Message,
    MessageDeletebtn,
    NameContainer,
    LoadingViewContainer,
    ErrorMessage,
    DeleteText,
    EmptyImage,
    EmptyText,
    FailureContainer,
    PagenationContainer,
    PrevButton,
    NextButton
} from './StyledComponents'
import ChurchNavbar from '../ChurchNavbar'

const apiStatusConstants = {
    initial: 'INITIAL',
    inProgress: 'IN_PROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
  }
const rootUsers = ['Agastin', "Christopher", "Daniel"]
// //   app.delete("/messages", checkAuthentication, async (request, response) => {
//   const {id} = request.body 
//   const deleteQuery = `DELETE FROM Messages WHERE id=${id};`
//   await db.run(deleteQuery)
 
//   response.send({successMsg: "Message Delete Successfully"});
// })


const Messages = () => {
    const [messagesData, setMessagesdata] = useState({
        status: apiStatusConstants.initial,
        messagesArray: [],
        deleteErr: false,
        deleteIdClick: '',
    })

    const [currentPage, setCurrentPage] = useState(1)

    const getMessagesArray = async () => {
        setMessagesdata(prev => ({
            ...prev,
            status: apiStatusConstants.inProgress
        }))
        try {
            const url = "https://lordjesus.onrender.com/messages"
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            } 
            const response = await fetch(url, options)
            const data = await response.json()
            if (response.ok) {
                setMessagesdata(prev => ({
                    ...prev,
                    status: apiStatusConstants.success,
                    messagesArray: data
                }))
            } else {
                setMessagesdata(prev => ({
                    ...prev,
                    status: apiStatusConstants.failure
                }))
            }
        } catch (err) {
            setMessagesdata(prev => ({
                ...prev,
                status: apiStatusConstants.failure
            }))
        }
    }

    useEffect(() => {
        getMessagesArray()
    }, [])

    const sweetAlert = () => {
        Swal.fire({
            text: "Sorry only root users can delete messages",
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

    const renderLoadingView = () => (
        <LoadingViewContainer>
          <ThreeDots  color="#C5AE5E" height="50" width="50" />
        </LoadingViewContainer>
      )

    const renderSuccessView = () => {
        const deleteMessage = async (id) => {
            const user = Cookies.get('username')
            if (rootUsers.includes(user)) {
                setMessagesdata(prev => ({
                    ...prev,
                    deleteIdClick: id
                }))
                try {
                    const url = "https://lordjesus.onrender.com/messages"
                    const messageDetails = {
                        id,
                    }
                    const jwtToken = Cookies.get('jwt_token')
                    const options = {
                         method: "DELETE",
                         headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${jwtToken}`,
                         },
                         body: JSON.stringify(messageDetails)
                    }
                    const response = await fetch(url, options) 
                    if (response.ok) {
                           const filteredMessages = messagesData.messagesArray.filter(item => (item.id !== id))
                           setMessagesdata(prev => ({
                            ...prev,
                            deleteIdClick: '',
                            messagesArray: filteredMessages
                           }))
        
                    } else {
                         setMessagesdata(prev => ({
                            ...prev,
                            deleteErr: true
                         }))
                    }
                } catch (e) {
                    setMessagesdata(prev => ({
                        ...prev,
                        deleteErr: true
                     }))
                }
            } else {
                sweetAlert()
            }
        }

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    }
    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    }

        const startIndex = (currentPage - 1) * 6;
        const endIndex = startIndex + 6;


       return(
       <>
            <MessagesHeading>Inbox Messages through <HighlatedText>LJCPC</HighlatedText> website.</MessagesHeading>
            {messagesData.deleteErr && <DeleteText>Sorry there is some error</DeleteText>}
            {messagesData.messagesArray.length === 0 && (
                <>
                <EmptyImage alt='Empty Inbox' src='https://cdni.iconscout.com/illustration/premium/thumb/female-employee-checking-mail-inbox-3391057-2829983.png'/>
                <EmptyText>Your Inbox is empty</EmptyText>
                </>
            )}
            <MessagesListContainer>
            {messagesData.messagesArray.slice(startIndex, endIndex).map(item => (
                <Message key={item.id}>
                    <NameContainer>
                        <FirstLetterContainer>{item.name[0].toUpperCase()}</FirstLetterContainer>
                        <Name>{item.name}</Name>
                    </NameContainer>
                    <MessageContentContainer>
                        <Description>phone: {item.number}</Description>
                        <Description>message: {item.message}</Description>
                    </MessageContentContainer>
                    <MessageDeletebtn type='button' onClick={() => deleteMessage(item.id)}>
                        {messagesData.deleteIdClick === item.id ? <Oval color="#ffff" height="25" width="25"/> : <AiTwotoneDelete/>}
                    </MessageDeletebtn>
                </Message>
            ))}
            </MessagesListContainer>
            <PagenationContainer>
                <ReactTooltip id="prev" place="top" className="tool"/>
                <PrevButton type='button' data-tooltip-id='prev' data-tooltip-content={"Previous"} onClick={handlePrevPage} disabled={currentPage === 1}><TbPlayerTrackPrev/></PrevButton>
                <ReactTooltip id="next" place="right" className="tool"/>
                <NextButton type='button' data-tooltip-id='next' data-tooltip-content={"Next"} onClick={handleNextPage} disabled={endIndex >= messagesData.messagesArray.length}><TbPlayerTrackNext/></NextButton>
            </PagenationContainer>
        </>   
            
        
    )}

    
    const renderFailureView = () => (
        <FailureContainer>
            <BiError color='#cc2d4d' size={60}/>
            <ErrorMessage>Fetching failed</ErrorMessage>
        </FailureContainer>
    )
    

    const renderHomeView = () => {
        const {status} = messagesData
    
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
        <MessagesContainer>
              <ChurchNavbar/>
              {renderHomeView()}
        </MessagesContainer>
   )
}

export default Messages