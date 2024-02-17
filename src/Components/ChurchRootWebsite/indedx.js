import { useEffect, useState } from "react";
import {Skeleton} from 'react-skeleton-generator'
import Cookies from "js-cookie";
import HandlerContext from "../../Context/HandlerContext";
import {useNavigate} from 'react-router-dom'
import ChurchNavbar from "../ChurchNavbar";


import { ChurchContainer, 
  Wishes, 
  Username, 
  ChildrenContentContainer,
  DetailsContainer,
  DetailsText,
  SeeDetailsdBtn,
  GirlImage,
  Quote, 
  Ref,
} from "./StyledComponents";
const rootUsers = ['Agastin', "Christopher", "Daniel"]

const ChurchRootWebsite = () => {
    const [username, setUsername] = useState('')
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate()
    setTimeout(() => {
      setLoader(false)
    }, 2000)
    useEffect(() => {
        const user = Cookies.get('username')
        setUsername(user)
    }, [])
    
    return (
    <HandlerContext.Consumer>
      {value => {
        const {setActiveTab} = value
        const navigateList = () => {
          setActiveTab('')
          navigate('/Sunday-school-children')
        }
        return (
          
          <ChurchContainer>
            <ChurchNavbar/>
            {loader ? (
              <>
                    <Skeleton.SkeletonThemeProvider highlight="dark" dataTestId='name' animationDuration={1} color="#e1e2e3" style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
                      <Skeleton width='80%' height='30px' borderRadius="10px" style={{marginBottom: 30}}/>
                      </Skeleton.SkeletonThemeProvider>
                  
                    <Skeleton.SkeletonThemeProvider highlight="dark" dataTestId='Quote' animationDuration={1} color="#e1e2e3" style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
                          <Skeleton widthMultiple={['100%', '100%', '100%', '20%']} height='20px' count={4} borderRadius="10px"/>
                      </Skeleton.SkeletonThemeProvider>
                      <Skeleton.SkeletonThemeProvider highlight="dark" dataTestId='name' animationDuration={1} color="#e1e2e3" style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
                          <Skeleton widthMultiple={['30%', '15%']} height='15px' count={2} borderRadius="10px" style={{marginLeft: 'auto'}}/>
                      </Skeleton.SkeletonThemeProvider>
              </>
            ) : (
                <>
                    <Wishes>Praise the lord brother <Username ispro={(rootUsers.includes(username)).toString()}>{username}</Username>,</Wishes>
                    <Quote>
                      You’re a Christian. You have right to any redemptive blessing that Jesus died for you for. 
                      It’s all yours! It’s already paid for, you just have to believe it.
                      Not imagine it; but believe it, and know that it’s yours, and you can possess it. 
                      Oh, that’s the conquering Faith: know! Yeah.
                      </Quote> 
                      <Ref>
                          Perfect Faith,<br/>
                          W M Branham.
                      </Ref>
              
                </>
            )}
                
            
           
            <ChildrenContentContainer>
                    <DetailsContainer>
                      <DetailsText>Sunday school children list</DetailsText>
                      <SeeDetailsdBtn type='button' onClick={navigateList}>Go to details</SeeDetailsdBtn>
                    </DetailsContainer>
                    <GirlImage alt='See Details' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707741126/c6usjcphhk1spqkwbcmn.png'/>
            </ChildrenContentContainer>
        </ChurchContainer>
        
            )
          }}
        </HandlerContext.Consumer>
       
   )
}

export default ChurchRootWebsite