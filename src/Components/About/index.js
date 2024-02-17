import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import {Skeleton} from 'react-skeleton-generator'

import {
  AboutContainer,
  AboutDetailsContainer,
  AboutText,
  DetailsContentContainer,
  DetailsImage,
  HighlatedText,
  DetailsText,
  HomeBannerContainer,
  ContentContainer,
  Quotation,
  Image,

} from './StyledComponents'


const About = () => {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }, [])
  return (
  
      <AboutContainer>
        <Navbar/>
        
        <AboutDetailsContainer>
        {loader ? (
                   <Skeleton.SkeletonThemeProvider highlight="dark" animationDuration={1} color="#e1e2e3" dataTestId="loader" style={{marginBottom: 50}}>
                      <Skeleton style={{width: '100%', maxWidth: '240px', margin: 'auto', height: '220px', borderRadius: '50%', marginTop: 20}}/>
                      <Skeleton count={3} widthMultiple={['70%', '50%', '40%']} heightMultiple={['20px', '15px', '15px']} style={{ margin: 'auto',  borderRadius: '20px', marginTop: 10}}/>
                    </Skeleton.SkeletonThemeProvider>
        ) : (
          <>
          <DetailsImage alt='pastor. Christopher geru' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1706589275/qggh5tfhxz8nxlgaeep0.png'/>
          <DetailsContentContainer>
              <AboutText style={{marginBottom: 3}}><HighlatedText>L</HighlatedText>ord <HighlatedText>J</HighlatedText>esus <HighlatedText>C</HighlatedText>hrist <HighlatedText>P</HighlatedText>rayer <HighlatedText>C</HighlatedText>hurch.</AboutText>
             <DetailsText>Our beloved pastor <HighlatedText style={{fontSize: 18}}>M.Christopher</HighlatedText> garu,</DetailsText>
             <DetailsText>Kota, Konaseema dist, AP - 533306</DetailsText>
          </DetailsContentContainer>
          </>
        )}
          
           
        </AboutDetailsContainer>
       
        <HomeBannerContainer>
            <Image alt='Jesus' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707662095/sss5vifxtgjntfxusuhi.jpg'/>
            
            <ContentContainer>
                <Quotation>
                  <HighlatedText>Brother William M. Branham, The prophet of this age</HighlatedText>.
                  The photograph was verified as being an authentic capture of a supernatural being by Mr.George J.Lacy of the American Society of Questioned Document Examiners.
                </Quotation>
            </ContentContainer>
           
           
        </HomeBannerContainer>
        
        <HomeBannerContainer>
            <Image  second alt='Jesus' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1706610749/u4nb4sd5wy7o5bc1gx8g.jpg'/>
            <ContentContainer second>
                <Quotation>
                  <HighlatedText>Mysterious Cloud</HighlatedText> This photograpgh appeared on the cover of "Science Magazine", 
                  19th April 1963, in "Life Magazine",
                  17th May 1963, and in the "London Observer". The "Encyclopedia Britannica" also recorded details of this cloud in their 1965 year book.
                </Quotation>
            </ContentContainer>
        </HomeBannerContainer>
       
      </AboutContainer>
      

)}

export default About