import styled from 'styled-components'


export const Container  = styled.div`
     background: linear-gradient(172.57deg, rgb(1, 72, 46) 0%, rgba(139, 198, 184, 0) 187.8%);
     height: 100vh; 
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
`

export const ErrorShowText = styled.p`
    color: #fff;
    font-family: Mandali;
    font-size: 15px;
    width: 90%;
    line-height: 25px;
    margin-top: 0;
    text-align: center;
    @media (min-width: 700px) {
        font-size: 20px;
    }
`

export const GotoLoginBtn = styled.button`
    background: rgb(99, 222, 214);
    border: none;
    outline: none;
   
    border-radius: 7px;
    padding: 5px 20px 5px 20px;
    font-size: 17px;
    color: rgb(46, 42, 72);
    font-weight: 600;
    font-family: Mandali;
    cursor: pointer;
    @media (min-width: 700px) {
        font-size: 20px;
    }
`

export const LoginErrorImage = styled.img`
     width: 100%;
     max-width: 500px;
     animation: motion 7s ease-in-out infinite alternate;
   @keyframes motion {
       to {
        transform: translateY(-10px) skew(4deg, 2deg) scale(1);
        opacity: 1;
       } from {
        
        transform: scale(0.9);
        opacity: 0.5;
       }
   }
`