import styled from 'styled-components'

export const AboutContainer = styled.div`
     background: linear-gradient(179.06deg, rgb(87, 121, 245) -6.49%, rgba(17, 11, 45, 0.98) -6.48%, rgba(124, 134, 144, 0.43) 148.77%);
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow: auto;
`

export const AboutDetailsContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-self: center;
 
`
export const DetailsContentContainer = styled.div`
    order: 2;
    flex-grow: 1;
    margin-top: 15px;
    text-align: center;
`
export const DetailsText = styled.p`
    font-family: Mandali;
    color: #fff;
    font-size: 14px;
    letter-spacing: 0.05em;
    font-weight: 600;
    line-height: 25px;
    margin-top: 0;
    margin-bottom: 3px;
    @media (min-width: 700px) {
        font-size: 16px;
        line-height: 35px;
    }
    @media (max-width: 370px) {
        font-size: 12px;
    }
`

export const AboutText = styled.p`
     font-family: Mandali;
    color: #fff;
    font-size: 18px;
    letter-spacing: 0.02em;
    font-weight: 600;
    line-height: 25px;
    margin-top: 0;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    @media (min-width: 700px) {
        font-size: 27px;
        letter-spacing: 0.05em;
        line-height: 35px;
    }
    @media (max-width: 370px) {
        font-size: 17px;
    }
`
export const DetailsImage = styled.img`
    width: 100%;
    max-width: 270px;
    order: 1;
    margin: auto;
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    border-radius: 50%;
    margin-top: 50px;
    @media (max-width: 370px) {
       max-width: 200px;
    }
    animation: mode 5s ease-in-out infinite alternate;
    @keyframes mode {
         to {
             transform: scale(1) translateY(-5px) skew(1deg, 1deg);
             opacity: 1;
         } from {
            transform: scale(0.9);
            opacity: 0.8;
         }
    }
`
export const HighlatedText = styled.span`
    font-family: 'Mandali', sans-serif;
    color: #C5AE5E;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`

export const HomeBannerContainer = styled.div`
    width: 90%;
    align-self:center;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
    @media (max-width: 520px) {
        flex-direction: column;
    }
    
    
`

export const Image = styled.img`
    width: 160px;
    height: 185px;
    flex-shrink: 0;
    margin-right: 15px;
    border-radius: 7px;
    box-shadow: 8px 10px 20px rgba(0, 0, 0, 0.19);
    @media (max-width: 520px) {
        width: 50px;
        align-self: flex-start;
        border-radius: 50%;
        height: 60px;
    }
    ${props => props.second && `
          order: 1;
          margin-right: 15;
          margin-left: 0;
          @media (max-width: 370px) {
            order: 1;
            margin-left: 0;
          }
    `}
    
    @media (min-width: 768px) {
        width: 250px;
        height: 280px;
        margin-right: 30px;
        order: 2;
        margin-left: 10px;
        flex-shrink: 0;
    }
`
export const ContentContainer = styled.div`
  
   display: flex;
   flex-direction: column;
   order: 1;
   ${props => props.second && `
          order: 2;
    `}      
`
export const Quotation = styled.p`
   font-family: Mandali;
   font-size: 18px;
   line-height: 20px;
   letter-spacing: 0.02em;
   margin-top: 0;
   padding: 0 5px 0 5px;
   
   color: #ffff;
   @media (min-width: 400px) {
    font-size: 16px;
    
   }
   margin-bottom: 0;
   @media (min-width: 768px)  {
    font-size: 20px;
    line-height: 40px;
   }
   @media (min-width: 999px) {
    font-size: 27px;
   }
`
export const Reference = styled.p`
    font-family: Mandali;
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