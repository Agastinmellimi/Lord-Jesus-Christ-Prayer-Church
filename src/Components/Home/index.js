
import {useEffect, useState} from 'react'
import Slider from 'react-slick'
import {ThreeDots} from 'react-loader-spinner'
import { BiError } from "react-icons/bi";

import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

import Navbar from '../Navbar'
import Footer from '../Footer';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
    HomeContainer, 
    HomeBannerContainer,
    Image, 
    ContentContainer, 
    Quotation, Reference, 
    LoadingViewContainer, 
    ErrorMessage,
    Heading,
    ServicesContainer,
    Service,
    ServiceImage,
    ServiceName,
    ServiceDescription,
    FailureContainer,
    SliderContainer,
    ImageContainer,
    SliderImage,
    LineText,
    HighlatedText
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const Home = () => {
    const [apiResponse, setApiResponse] = useState({
        status: apiStatusConstants.initial,
        servicesData: null,
    })
    useEffect(() => {
        const getServices = async () => {
            setApiResponse(prevDetails => ({
                status: apiStatusConstants.inProgress,
                servicesData: null,
                error: null
            }))
            try {
                const url = 'https://lordjesus.onrender.com/services'
            const request = await fetch(url)
            const responseData =  await request.json()
            
            if (request.ok) {
                setApiResponse(prevDetails => ({
                    ...prevDetails,
                    status: apiStatusConstants.success,
                    servicesData: responseData,
                }))
            } else {
                setApiResponse(prevDetails => ({
                    ...prevDetails,
                    status: apiStatusConstants.failure,
                }))
            }


            } catch (err) {
                setApiResponse(prevDetails => ({
                    ...prevDetails,
                    status: apiStatusConstants.failure,
                }))
            }
        }
        getServices()
    }, [])

    const renderLoadingView = () => (
        <LoadingViewContainer>
          <ThreeDots  color="rgb(99, 222, 214)" height="50" width="50" />
        </LoadingViewContainer>
      )

    const renderSuccessView = () => {
        const {servicesData} = apiResponse
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 600,
            autoplaySpeed: 3000,
            nextArrow: <FcNext size={25} />,
            prevArrow: <FcPrevious size={25} />,
            cssEase: "linear"
        }

        return (
         <>
        <HomeBannerContainer>
            <Image alt='Jesus' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1706527051/huhq7x6ximrynwyoo3go.jpg'/>
            <ContentContainer>
                <Quotation>
                ‘Jesus Christ is the same yesterday, today, and forever’
                </Quotation>
                <Reference>
                 Hebrew 13:8
                </Reference>
            </ContentContainer>
        </HomeBannerContainer>
        <HomeBannerContainer second>
            <Image  alt='Jesus' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1706610749/u4nb4sd5wy7o5bc1gx8g.jpg' second/>
            <ContentContainer second>
                <Quotation>
                ‘I saw another mighty angel come down from heaven, clothed with a cloud’
                </Quotation>
                <Reference>
                 Revelation 10:1
                </Reference>
            </ContentContainer>
        </HomeBannerContainer>
        <Heading>Services</Heading>
        <ServicesContainer>
            {servicesData.map(serv => {
                
                return (
                <Service>
                    <ServiceImage alt={serv.service} src={serv.image} />
                    <ServiceName>{serv.service}</ServiceName>
                    <ServiceDescription>{serv.description}</ServiceDescription>

                </Service>
            )})}
        </ServicesContainer>
        <SliderContainer>
             <Slider {...settings}>
                 <ImageContainer>
                    <SliderImage alt='family' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1708177719/uyvami80oso0rx1jdicv.jpg'/>
                    <LineText style={{marginBottom: 0}}><HighlatedText>L</HighlatedText>ord <HighlatedText>J</HighlatedText>esus <HighlatedText>C</HighlatedText>hrist <HighlatedText>P</HighlatedText>reyar <HighlatedText>C</HighlatedText>hurch</LineText>
                    <LineText style={{marginTop: 0}}>Our beloved pastor <HighlatedText>M.Christopher</HighlatedText> garu family,</LineText>
                 </ImageContainer>
                
                 <ImageContainer>
                    <SliderImage alt='family' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707711130/ceq8fvwstqjsxdziulcp.jpg'/>
                 </ImageContainer>
             </Slider>
        </SliderContainer>
        <Footer />
         </>
    )}

    const renderFailureView = () => (
        <FailureContainer>
            <BiError color='#cc2d4d' size={60}/>
            <ErrorMessage>Fetching failed</ErrorMessage>
        </FailureContainer>
    )
              
  

    const renderHomeView = () => {
        const {status} = apiResponse
    
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
            <HomeContainer>
                <Navbar/>
                {renderHomeView()}
            </HomeContainer>
        )
      
}

export default Home