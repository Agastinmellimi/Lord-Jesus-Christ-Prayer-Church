import { useState, useEffect } from 'react'
import {Popup} from 'reactjs-popup'

import Swal from 'sweetalert2'

import { AiTwotoneDelete } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { TiCancel } from "react-icons/ti";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { BiError } from "react-icons/bi";
import {ThreeDots, Oval} from 'react-loader-spinner'
import ChurchNavbar from '../ChurchNavbar'
import Cookies from 'js-cookie';

import 'reactjs-popup/dist/index.css';
import 'animate.css';

import {
    ChildrenContainer, 
    Heading,
    Children,
    ImageChildren,
    BtnContainer,
    ChildrenName,
    ChildrensListContainer,
    DeleteBtn,
    Button,
    DeleteText,
    ConfirmText,
    LoadingViewContainer,
    FailureContainer,
    ErrorMessage,
    PopupContainer,
    InputFeildContainer,
    Label,
    Input,
    InputSubmitBtn,
    UpdateBtnContainer,
    ErrorMsg,
    RadioInput,
    RadioInputContainer,
    InputImage,
    InputChildContainer,
    RadioLabel,
    SuccessImage,
    SuccessText,
    SuccessTextContainer,
    SendSuccessContainer,
    RefreshBtn,
    UserFailureContainer,
    NotFoundImage,
    NotFoundText,
    NotFoundTextContainer,
    BackButton,
} from './StyledComponents'


const apiStatusConstants = {
    initial: 'INITIAL',
    inProgress: 'IN_PROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
  }
const rootUsers = ['Agastin', "Christopher", "Daniel"]
const genderObject =  {
    male: "MALE",
    female: "FEMALE",
}

const ChildrensList = () => {
    const [apiResponseData, setApiResponseData] = useState({
        status: apiStatusConstants.initial,
        childrenList: [],
        clickChild: '',
        deleteErr: false,
        successMsg: '',
        isError: false,
        failErr: false,
        errMsg: '',
        isLoading: false
    })



    const [onBlurInputErrors, HandleBlurInputsErrors] = useState({
        blurPrevNameEr: false,
        blurNewnameErr: false,
        blurNameErr: false
    })

    const [inputValues, setInputValues] = useState({
        previousName: '',
        newName: '',
        gender: "MALE"
    })

    const [addInputValues, setAddInputValues] = useState({
        name: '',
        nameErr: false,
        gender: 'MALE',
        addErr: false,
        addErrMsg: '',
        isAdd: false,
        addSuccessMsg: '',
        isLoad: false
    })

    const [inputErrors, handleInputErrors] = useState({
        previousNameErr: false,
        newNameErr: false,
    })

    const [isUpdate, setUpdateStatus] = useState(false)
    

    const sweetAlert = () => {
        Swal.fire({
            text: "Sorry only root users can do this changes",
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
    
    // get all children List 
    const getChildrenList = async () => {
        setApiResponseData(prev => ({
            ...prev,
            status: apiStatusConstants.inProgress,
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

    useEffect(() => {
        getChildrenList()
    }, [])

    const renderLoadingView = () => (
        <LoadingViewContainer>
          <ThreeDots  color="#C5AE5E" height="50" width="50" />
        </LoadingViewContainer>
      )

    const renderFailureView = () => (
        <FailureContainer>
            <BiError color='#cc2d4d' size={60}/>
            <ErrorMessage>Fetching failed</ErrorMessage>
        </FailureContainer>
    )

    // delete child fetch
    const deleteChildren = async (name) => {
         const user = Cookies.get('username')
         if (rootUsers.includes(user)) {
            setApiResponseData(prev => ({
                ...prev,
                clickChild: name
            }))
    
           try {
            const url = "https://lordjesus.onrender.com/children"
            const childrenDetails = {
                name,
            }
            
            const jwtToken = Cookies.get('jwt_token')
            const options = {
                 method: "DELETE",
                 headers: {
                    "Content-Type": "application/json",
                     Authorization: `Bearer ${jwtToken}`,
                 },
                 body: JSON.stringify(childrenDetails)
            }
            const response = await fetch(url, options)
            const data = await response.json() 
            if (response.ok) {
                   console.log(data)
                   const filteredList = apiResponseData.childrenList.filter(item => (item.name !== name))
                   setApiResponseData(prev => ({
                    ...prev,
                    clickChild: '',
                    childrenList: filteredList
                   }))
    
            } else {
                setApiResponseData(prev => ({
                    ...prev,
                   deleteErr: true
                   }))
            }
           } catch (e) {
            setApiResponseData(prev => ({
                ...prev,
                clickChild: '',
               deleteErr: true,
               }))
           }
         } else {
           sweetAlert()
         }
    }
    
    // update child fetch
    const SubmitForm = async event => {
       
            event.preventDefault()
            const {previousName, newName, gender} = inputValues
            if (previousName === '' && newName === '') {
                handleInputErrors({
                    previousNameErr: true,
                    newNameErr: true
                })
            } else if (previousName !== '' && newName === '') {
                handleInputErrors({
                    previousNameErr: false,
                    newNameErr: true
                })
            } else if (previousName === '' && newName !== '') {
                handleInputErrors({
                    previousNameErr: true,
                    newNameErr: false
                })
            } else {
                handleInputErrors({
                    previousNameErr: false,
                    newNameErr: false
                })
                setApiResponseData(prev => ({
                    ...prev,
                    isLoading: true
                }))
                 // const {previousName, newName, gender} = request.body
                 const updateDetails = {
                    previousName: previousName.toUpperCase(),
                    newName: newName.toUpperCase(),
                    gender
                 }
                try {
                                
                 const url = 'https://lordjesus.onrender.com/children'
                 const jwtToken = Cookies.get('jwt_token')
                 const options = {
                    method: "PUT",
                    headers: {
                       "Content-Type": "application/json",
                        Authorization: `Bearer ${jwtToken}`,
                    },
                    body: JSON.stringify(updateDetails)
                }
                const response = await fetch(url, options)
                const data = await response.json()
                if (response.ok) {
                    const filteredData = apiResponseData.childrenList.map(item => {
                        if (item.name === previousName.toUpperCase()) {
                            return {...item, name: newName.toUpperCase(), gender}
                        } else {
                            return {...item}
                        }
                    })
                    
                    
                    setApiResponseData(prev => ({
                        ...prev,
                        successMsg: data.successMsg,
                        isLoading: false,
                        childrenList: filteredData
                    }))
                    setInputValues({
                        previousName: '',
                        newName: '',
                        gender: "MALE"
                    })
                    setUpdateStatus(true)
                } else {
                    setApiResponseData(prev => ({
                        ...prev,
                        isError: true,
                        errMsg: data.err_msg,
                        isLoading: false
                    }))
                    setInputValues({
                        previousName: '',
                        newName: '',
                        gender: "MALE"
                    })
                    setUpdateStatus(false)
                }
                } catch (e) {
                    setApiResponseData(prev => ({
                        ...prev,
                        isError: true,
                        failErr: true,
                        errMsg: "Sorry there is some error",
                        isLoading: false
                    }))
                    setInputValues({
                        previousName: '',
                        newName: '',
                        gender: "MALE"
                    })
                    setUpdateStatus(false)
                }
    
            }
    }
    
    // Add child fetch
    const addChildForm = async event => {
            event.preventDefault()
            const {name, gender} = addInputValues
            if (name === '') {
                setAddInputValues(prev => ({
                    ...prev,
                    nameErr: true
                }))
            } else {
                setAddInputValues(prev => ({
                    ...prev,
                    nameErr: false,
                    isLoad: true
                }))
                const childDetails = {
                    name: name.toUpperCase(),
                    gender
                }
                try {
                    const addChildUrl = 'https://lordjesus.onrender.com/children'
                    const jwtToken = Cookies.get('jwt_token')
                     const options = {
                        method: "POST",
                        headers: {
                           "Content-Type": "application/json",
                            Authorization: `Bearer ${jwtToken}`,
                        },
                        body: JSON.stringify(childDetails)
                    }
                    const response = await fetch(addChildUrl, options)
                    const data = await response.json()
                    if (response.ok) {
                        const filteredData = apiResponseData.childrenList
                        filteredData.push({id: filteredData.length + 1, name: name.toUpperCase(), gender})
                        setAddInputValues(prev => ({
                            ...prev,
                            isLoad: false,
                            isAdd: true,
                            addErr: false,
                            addSuccessMsg: data.successMsg,
                            name: '',
                            gender: "MALE"
                        }))
                        setApiResponseData(prev => ({
                            ...prev,
                            childrenList: filteredData.sort((a, b) => {
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
                        setAddInputValues(prev => ({
                            ...prev,
                            isLoad: false,
                            isAdd: false,
                            addErr: true,
                            addErrMsg: data.err_msg,
                            name: '',
                            gender: "MALE"
                        }))
                    }
                } catch (e) {
                    setApiResponseData(prev => ({
                        ...prev,
                        failErr: true
                    }))
                    setAddInputValues(prev => ({
                        ...prev,
                        isLoad: false,
                        isAdd: false,
                        addErr: true,
                        addErrMsg: 'Sorry there is some error',
                        name: '',
                        gender: "MALE"
                    }))
                }
            }
        
    }

    // upadte form male radio input
    const changeMaleRadio = event => {
        setInputValues(prev => ({...prev, gender: event.target.value}))
    }

    // update for female radio input
    const changeFemaleRadio = event => {
        setInputValues(prev => ({...prev, gender: event.target.value}))
    }


    const onChangePreviousName = event => {
         setInputValues(prev => ({...prev, previousName: event.target.value}))
    }

    const onChangeNewname = event => {
        setInputValues(prev => ({...prev, newName: event.target.value}))
    }

    const onChangeName = event => {
        setAddInputValues(prev => ({
            ...prev,
            name: event.target.value
        }))
    }

    // handle male radio value form add form
    const changeMaleRadioFromAddForm = event => {
        setAddInputValues(prev => ({
            ...prev,
            gender: event.target.value
        }))
    }
    // handle female radio value form add form
    const changeFemaleRadioFromAddForm = event => {
        setAddInputValues(prev => ({
            ...prev,
            gender: event.target.value
        }))
    }

    const refresh = () => {
        setUpdateStatus(false)
        setApiResponseData(prev => ({
            ...prev,
            deleteErr: false,
            successMsg: '',
            isError: false,
            errMsg: '',
            clickChildId: '',
            isLoading: false
        }))
        setInputValues({
            previousName: '',
            newName: '',
            gender: "MALE"
        })
        handleInputErrors({
            previousNameErr: false,
            newNameErr: false,
        })
        // isUpdate && getChildrenList()
    }
 
    const addRefesh = () => {
        setApiResponseData(prev => ({
            ...prev,
            clickChildId: '',
        }))
         setAddInputValues({
            name: '',
            nameErr: false,
            gender: 'MALE',
            addErr: false,
            addErrMsg: '',
            isAdd: false,
            addSuccessMsg: '',
            isLoad: false
         })
         
    }

    const onBlurName = (event ) => {
        if (event.target.value === '') {
            HandleBlurInputsErrors(prev => ({
                ...prev,
                blurNameErr: true
            }))
        } else {
            HandleBlurInputsErrors(prev => ({
                ...prev,
                blurNameErr: false
            }))
        }
    }

    const renderAddChildView = () => (
        // Add child Input Feild
        <InputChildContainer>
            <InputFeildContainer add='true' onSubmit={addChildForm}>
                  <Label htmlFor="name">Child name</Label>
                  <Input id='name' nameerr={(addInputValues.nameErr || onBlurInputErrors.blurNameErr).toString()} onBlur={onBlurName} type='text' value={addInputValues.name}  placeholder="Child Name..." onChange={onChangeName} />
                  {addInputValues.nameErr && <ErrorMsg>please provide your name</ErrorMsg>}
                  <RadioInputContainer>
                    <RadioInput type='radio' id='childMale' name='childGender' defaultChecked value={genderObject.male} onChange={changeMaleRadioFromAddForm}/>
                    <RadioLabel htmlFor='childMale'>Male</RadioLabel>
                    <RadioInput type='radio' id='childFemale' name='childGender' value={genderObject.female} onChange={changeFemaleRadioFromAddForm}/>
                    <RadioLabel htmlFor='childFemale'>Female</RadioLabel>
                  </RadioInputContainer>
                  <UpdateBtnContainer>
                  {/* <Oval color="rgb(46, 42, 72)" height="30" strokeWidthSecondary={6} width="30"/> */}
                    <InputSubmitBtn addload={addInputValues.isLoad.toString()} add={'true'} type="submit">{addInputValues.isLoad ? <Oval color="#fff" height="30" strokeWidthSecondary={6} width="30"/> : "Add"}</InputSubmitBtn>
                  </UpdateBtnContainer>
                  
              </InputFeildContainer>
              <InputImage add='true' alt='contact' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707888575/nnsu9adk2zxjotajw0gs.png'/>
        </InputChildContainer>
    )

    const onBlurPrevName = (event) => {
           if (event.target.value === '') {
               HandleBlurInputsErrors(prev => ({
                ...prev,
                blurPrevNameEr: true
               }))
           } else {
                HandleBlurInputsErrors(prev => ({
                    ...prev,
                    blurPrevNameEr: false
               }))
           }
    }

    const onBlurNewName = event => {
        if (event.target.value === '') {
            HandleBlurInputsErrors(prev => ({
                ...prev,
                blurNewnameErr: true
               }))
        } else {
            HandleBlurInputsErrors(prev => ({
                ...prev,
                blurNewnameErr: false
               }))
        }
    }

   

    const renderSuccessView = () => (
        <>
        <Heading>Sunday School Children's</Heading>
        {apiResponseData.deleteErr && <DeleteText>Sorry there is some error</DeleteText>}
        <ChildrensListContainer>
            {apiResponseData.childrenList.map(item => (
                <Children key={item.id}>
                        <ImageChildren alt='childrenImage'
                        src={item.gender === "MALE" ? 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1706681450/a1rmhceyfccwmj04gn9g.png' : "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1706681443/uybys3x9m2u9rvm2wiiz.png"}
                        />
                        <ChildrenName>{item.name}</ChildrenName>
                        {/* onClick={() => deleteChildren(item.name, item.id)} */}
                        
                        <Popup modal trigger={
                            <DeleteBtn type="button" >
                                {apiResponseData.clickChild === item.name ? <Oval color="#ffff" height="25" width="25"/> : <AiTwotoneDelete/>}
                            </DeleteBtn>
                         }
                         
                         >
                           {close => (
                             <PopupContainer>
                                <ConfirmText>Are you sure? you want to delete child</ConfirmText>
                                <BtnContainer>
                                    <ReactTooltip id='cancel' place='bottom' className='tool-cancel' delayShow={1000}/>
                                    <Button data-tooltip-id='cancel' data-tooltip-content={"cancel"} type='button' onClick={() => close()}><TiCancel/></Button>
                                    <ReactTooltip id='delete' place='bottom' className='tool-delete' delayShow={1000}/>
                                    <Button delete={'true'} type='button' data-tooltip-id='delete' data-tooltip-content={"delete"} onClick={() => {close(); deleteChildren(item.name)}}><MdDelete/></Button>
                                </BtnContainer>
                             </PopupContainer>
                           )}
                        </Popup>
                </Children>
            ))}
        </ChildrensListContainer>
        <Heading>Update child</Heading>
        {isUpdate ? (
                      <SendSuccessContainer>
                            <SuccessTextContainer>
                                <SuccessText>{apiResponseData.successMsg}</SuccessText>
                                <RefreshBtn type='button' onClick={refresh}>Back</RefreshBtn>
                            </SuccessTextContainer>
                                <SuccessImage alt='Msg Success' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707827911/ign1j5xwwfq1cbasyfb1.png'/>
                        </SendSuccessContainer>
        ) :  apiResponseData.isError ? (
            <UserFailureContainer>
                <NotFoundImage alt='previous name error' src= {apiResponseData.failErr ? "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1708081660/z8ldbbkea2rzalwagrzr.png" : 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707733720/ktysjtoafjggbugqpb0k.png'}/>
                <NotFoundTextContainer>
                    <NotFoundText>{apiResponseData.errMsg}</NotFoundText>
                    <BackButton type='button' onClick={refresh}>Back</BackButton>
                </NotFoundTextContainer>
            </UserFailureContainer>
        ): (
            // Update child input feild
            <InputChildContainer>
            <InputFeildContainer onSubmit={SubmitForm}>
                  <Label htmlFor="previous name">Previous name</Label>
                  <Input id='previous name' onBlur={onBlurPrevName} preverr={(inputErrors.previousNameErr || onBlurInputErrors.blurPrevNameEr).toString()} type='text' value={inputValues.previousName}  placeholder="Previous Name..." onChange={onChangePreviousName} />
                  {inputErrors.previousNameErr && <ErrorMsg>please provide your previous name</ErrorMsg>}
                  <Label htmlFor="new name">New name</Label>
                  <Input id='new name' onBlur={onBlurNewName} newerr={(inputErrors.newNameErr || onBlurInputErrors.blurNewnameErr).toString()} type='text' value={inputValues.newName} placeholder="New name..." onChange={onChangeNewname}/>
                  {inputErrors.newNameErr && <ErrorMsg>please provide your new name</ErrorMsg>}
                  <RadioInputContainer>
                    <RadioInput type='radio' id='male' name='gender' defaultChecked value={genderObject.male} onChange={changeMaleRadio}/>
                    <RadioLabel htmlFor='male'>Male</RadioLabel>
                    <RadioInput type='radio' id='female' name='gender' value={genderObject.female} onChange={changeFemaleRadio}/>
                    <RadioLabel htmlFor='female'>Female</RadioLabel>
                  </RadioInputContainer>
                  <UpdateBtnContainer>
                  {/* <Oval color="rgb(46, 42, 72)" height="30" strokeWidthSecondary={6} width="30"/> */}
                    <InputSubmitBtn loading={apiResponseData.isLoading.toString()} type="submit">{apiResponseData.isLoading ? <Oval color="rgb(46, 42, 72)" height="30" strokeWidthSecondary={6} width="30"/>: "Update"}</InputSubmitBtn>
                  </UpdateBtnContainer>
                  
              </InputFeildContainer>
              <InputImage alt='contact' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707815498/bjwovkjoydheqgnql7t5.png'/>
            </InputChildContainer>
        )}
        <Heading>Add child</Heading>
        {addInputValues.isAdd ? (
              <SendSuccessContainer>
                    <SuccessTextContainer>
                        <SuccessText>{addInputValues.addSuccessMsg}</SuccessText>
                        <RefreshBtn type='button' onClick={addRefesh}>Back</RefreshBtn>
                    </SuccessTextContainer>
                        <SuccessImage alt='Msg Success' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707827911/ign1j5xwwfq1cbasyfb1.png'/>
                </SendSuccessContainer>
        ) :  addInputValues.addErr ? (
             <UserFailureContainer>
                <NotFoundImage alt='user name exist' src={apiResponseData.failErr ? "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1708008912/zf4bfjrrtiuaqgcmyowr.png" : 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707892344/n8y6tldqeoi0fypbzsxb.png'}/>
                <NotFoundTextContainer>
                    <NotFoundText>{addInputValues.addErrMsg}</NotFoundText>
                    <BackButton type='button' onClick={addRefesh}>Back</BackButton>
                </NotFoundTextContainer>
         </UserFailureContainer>
        ) : renderAddChildView()}
        
        </>
    )

    const renderChildrensView = () => {
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
    <ChildrenContainer>
        <ChurchNavbar/>
        {renderChildrensView()}
    </ChildrenContainer>
)}

export default ChildrensList