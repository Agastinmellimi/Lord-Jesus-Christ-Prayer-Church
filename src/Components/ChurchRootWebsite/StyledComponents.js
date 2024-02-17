import styled from 'styled-components'


export const ChurchContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow: auto;
    background: linear-gradient(172.57deg, rgb(1, 72, 46) 0%, rgba(139, 198, 184, 0) 187.8%);
`

export const Wishes = styled.h1`
   font-family: Mandali;
    color: #E9E8E4;
    width: 90%;
    align-self: center;
    font-size: 20px;
    line-height: 30px;
    @media (min-width: 700px) {
        font-size: 30px;
    }
    @media (max-width: 300px) {
        font-size: 16px;
    }
`
export const Username = styled.span`
    font-family: 'Mandali', sans-serif;
    color: #64DED7;
    
    ${props => props.ispro === 'true' && `
          color: #e36256;
          font-weight: bolder;
          font-size: 23px;
          letter-spacing: 0.04em;
          @media (min-width: 700px) {
            font-size: 35px;
        }
        @media (max-width: 300px) {
            font-size: 17px;
        }
    `}
`
export const HighlatedText = styled.span`
    font-family: 'Mandali', sans-serif;
    color: #C5AE5E;
`

export const Quote = styled.p`
     font-family: Mako;
     width: 90%;
     align-self: center;
    font-weight: 600;
    margin-bottom: 0;
    letter-spacing: 0.03em;
    color: rgb(196, 174, 94); 
    font-size: 18px;
    line-height: 35px;
    @media (min-width: 700px) {
        font-size: 28px;
    }
    @media (max-width: 300px) {
        font-size: 16px;
    }
    
`
export const Ref = styled.p`
    color: #ffff;
    width: 90%;
    letter-spacing: 0.03em;
    align-self: center;
    margin-top: 8px;
    font-family: Mako;
    text-align: right;
    font-weight: 500;
    font-size: 23px;
    
    line-height: 27px;
    @media (max-width: 500px) {
        font-size: 15px;
    }
    @media (max-width: 300px) {
        font-size: 13px;
    }
`

export const ChildrenContentContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-self: center;
    @media (min-width: 700px) {
        flex-direction: row;
        align-items: center;
    }
`
export const DetailsContainer = styled.div`
    flex-grow: 1;
    order: 2;
    margin-top: 0;
    text-align: center;
    @media (min-width: 700px) {
        text-align: right;
    }
`

export const DetailsText = styled.p`
    font-family: Mandali;
    color: #fff;
    font-size: 18px;
    letter-spacing: 0.05em;
    font-weight: 600;
    line-height: 25px;
    margin-top: 0;
    @media (min-width: 700px) {
        font-size: 23px;
        line-height: 38px;
    }
`

export const SeeDetailsdBtn = styled.button`
    border: none;
    outline: none;
    background-image: linear-gradient(to right, #C02425 0%, #F0CB35  51%, #C02425  100%);
    padding: 1px 30px 1px 30px;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: #010e24;   
    font-family: Mandali;         
    border-radius: 10px;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    ${props => props.load && `
            padding: 8px 55px;
    `}
    &:hover {
        background-position: right center; /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
    }
    ${props => props.sub && `
        margin-left: auto;
    `}
    @media (max-width: 700px) {
      font-size: 17px;
      padding: 2px 20px 2px 20px;
    }          
         
`

export const GirlImage = styled.img`
    width: 100%;
    max-width: 180px;
    order: 1;
    margin: auto;
    @media (min-width: 768px) {
        width: 50%;
        max-width: 200px;
        margin-left: 30px;
    }
    animation: walk 5s ease-in-out infinite alternate;
    @keyframes walk {
        to {
            transform: translateY(-20px) translateX(10px) skew(4deg, 1deg) scale(1) rotate(-3deg);
        
        } from {
            transform: scale(0.9) translateX(-20);
        }
    }
`