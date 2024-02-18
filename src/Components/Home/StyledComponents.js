import styled from 'styled-components'


export const HomeContainer = styled.div`
    background: linear-gradient(179.06deg, rgb(87, 121, 245) -6.49%, rgba(17, 11, 45, 0.98) -6.48%, rgba(124, 134, 144, 0.43) 148.77%);
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: auto;
`

export const HomeBannerContainer = styled.div`
    width: 90%;
    align-self:center;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width: 370px) {
        flex-direction: column;
    }
    ${props => props.second && `
          align-items: center;
          @media (max-width: 370px) {
            align-items: flex-start;
          }
    `}
    
`

export const Image = styled.img`
    width: 160px;
    height: 185px;
    margin-right: 15px;
    border-radius: 7px;
    
    box-shadow: 8px 10px 20px rgba(0, 0, 0, 0.19);
    @media (max-width: 370px) {
        width: 50px;
        border-radius: 50%;
        height: 60px;
    }
    ${props => props.second && `
          order: 2;
          margin-right: 0;
          margin-left: 15px;
          @media (max-width: 370px) {
            order: 1;
           
          margin-left: 0;
          }
    `}
    
    @media (min-width: 768px) {
        width: 320px;
        height: 370px;
      
        margin-right: 30px;
    }
`
export const ContentContainer = styled.div`
  
   display: flex;
   flex-direction: column;
   ${props => props.second && `
          order: 1;
          
          @media (max-width: 370px) {
            order: 2;
            
          }
    `}
`
export const Quotation = styled.p`
   font-family: Mandali;
   font-size: 18px;
   line-height: 27px;
   letter-spacing: 0.02em;
   margin-top: 0;
   padding: 0 5px 0 5px;
   -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
   color: #ffff;
   @media (min-width: 400px) {
    font-size: 18px;
    
   }
   margin-bottom: 0;
   @media (min-width: 768px) {
    font-size: 40px;
    line-height: 60px;
   }
`

export const Reference = styled.p`
    font-family: Mandali;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    font-size: 13px;
    text-align: right;
    margin-top: 0;
    color: #fff; 
    padding-left: 0;
    padding-right: 10px;
    @media (max-width: 370px) {
        text-align: left;
        padding-left: 3px;
    }
    @media (min-width: 768px) {
        font-size: 20px;
    }
`

export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`
export const ErrorMessage = styled.p`
  font-family: Mandali;
  font-size: 32px;
  color: #ffffff;
  align-self: center;
  margin: 0px;
  text-align: center;
`
export const FailureContainer = styled.div`
      display: flex;
      width: 90%;
      align-self: center;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
`

export const Heading = styled.h1`
   font-family: Mandali;
   font-size: 23px;
   align-self: center;
   width: 90%;
   letter-spacing: 0.02em;
   color: #fff;
   margin-bottom: 0;
   @media (min-width: 768px) {
    font-size: 30px;
   }
`
export const ServicesContainer = styled.ul`
   padding-left: 0;
   flex-wrap: wrap;
   display: flex;
   width: 90%;
   align-self: center;
   justify-content: stretch;
   @media (max-width: 735px) {
    justify-content: space-between;
   }
`
export const Service = styled.li`
   list-style: none;
   background: rgba(219, 219, 219, 0.27000001072883606);
   border-radius: 6px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 0 6px 0 6px;
   margin-bottom: 15px;
   width: 46%;
   max-width: 200px;
   height: 180px;
   margin-right: 10px;
   @media (min-width: 700px) {
    
    height: 200px;
    margin-right: 15px;
   }
   @media (min-width: 371px) and (max-width: 735px) {
    width: 45%;
   }
   @media (max-width: 370px) {
    width: 45%;
    height: 150px;
   }
   @media (max-width: 281px) {
    width: 100%;
    margin-right: 0;
    flex-shrink: 0;
    align-items: center;
   }
   transition: all 0.5s ease-in-out;
   &:hover {
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
   }
`
export const ServiceImage = styled.img`
   width: 65px;
   height: 65px;
   align-self: center;
   border-radius: 35px;
   box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.45);
   @media (max-width: 400px) {
    width: 48px;
    height: 48px;
   }
   
`
export const ServiceName = styled.p`
   font-family: Mandali;
    font-weight: 400;
    font-size: 17px;
    color: #fff;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    line-height: 13px;
    text-align: center;
    @media (max-width: 400px) {
        font-size: 11px;
   }
`

export const ServiceDescription = styled.p`
     font-family: Mandali;
    
    font-weight: 400;
    font-size: 14px;
    margin-top: 0;
    line-height: 15px;
    padding: 0 3px 0 3px;
    text-align: center;
    
    color: rgb(190, 222, 99);
    @media (max-width: 400px) {
        font-size: 9px;
   }
`

export const ChurchName = styled.p`
    font-family: Mandali;
    font-size: 20px;
`
export const SliderContainer = styled.div`
   width: 90%;
   align-self: center;
   margin-top: 30px;
`

export const ImageContainer = styled.div`
   display: flex;
   align-self: center;
   justify-content: center;
   flex-direction: column;
   padding-top: 30px;
`
export const LineText = styled.p`
    font-family: Mandali;
    color: #fff;
    font-size: 14px;
    letter-spacing: 0.05em;
    font-weight: 600;
    line-height: 25px;
    margin-top: 0;
    text-align: center;
    margin-bottom: 3px;
    @media (min-width: 700px) {
        font-size: 15px;
        line-height: 35px;
    }
    @media (max-width: 370px) {
        font-size: 10px;
    }
`
export const HighlatedText = styled.span`
    font-family: 'Mandali', sans-serif;
    color: #C5AE5E;
`

export const SliderImage = styled.img`
   width: 80%;
   max-width: 300px;
   border-radius: 10px;
   margin: auto;
   @media (min-width: 768px) {
     max-width: 600px;
   }

   transition: transform 0.6s ease-in-out, box-shadow 1s ease-in-out;
   &:hover {
      transform: translateY(-10px);
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
   }
`