import styled from 'styled-components'

export const FooterContainer = styled.div`
     margin-top: 50px;
     background: rgba(27, 25, 25, 0.4699999988079071);
     display: flex;
     flex-direction: column;
     border-top-right-radius: 20px;
     padding-top: 15px;
     border-top-left-radius: 20px;
`

export const FooterConetentContainer = styled.div`
    width: 90%;
    align-self: center;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
`

export const FooterHeading  = styled.h1`
    font-family: Koulen;
    color: #ffffff;
    font-size: 20px;
    letter-spacing: 0.05em;
    line-height: 20px;
    flex-grow: 1;
    @media (min-width: 700px) {
      font-size: 30px;
    }
`
export const FooterText = styled.p`
   font-family: Mandali;
   font-size: 17px;
   letter-spacing: 0.03em;
   color: #b8a749;
   @media (max-width: 700px) {
    font-size: 13px;
   }
`

export const Btn = styled.button`
    
   background: rgba(104, 169, 173, 0.5199999809265137);
    color: #fff;
    font-family: "Mandali", sans-serif;
    font-size: 18px;
    border: none;
    cursor: pointer;
    outline: none;
    align-self: flex-end;
    border-radius: 20px;
    font-weight: 600;
    letter-spacing: 0.04em;
    padding: 3px 30px;
    @media (max-width: 500px) {
        padding: 3px 20px;
        font-size: 16px;
    }
`
export const CreatorName = styled.p`
    font-family: "Mandali", sans-serif;
    font-size: 17px;
    color: #ffff;
    width: 90%;
    margin-top: 0;
    align-self: center;
    text-align: center;
`