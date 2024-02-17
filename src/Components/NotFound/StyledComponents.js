import styled from 'styled-components'



export const NotFoundContainer = styled.div`
    background: linear-gradient(179.06deg, rgb(87, 121, 245) -6.49%, rgba(17, 11, 45, 0.98) -6.48%, rgba(124, 134, 144, 0.43) 148.77%);
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: auto;
`

export const NotFoundImage = styled.img`
       width: 100%;
       margin-top: 30px;
     max-width: 400px;
     align-self: center;
     animation: motion 7s ease-in-out infinite alternate;
   @keyframes motion {
       to {
        transform: translateY(-10px) skew(4deg, 2deg) scale(1);
        opacity: 1;
       } from {
        
        transform: scale(0.9);
        opacity: 0.9;
       }
    }
`

export const NotFoundText = styled.p`
    color: #fff;
    font-family: Mandali;
    font-size: 15px;
    width: 90%;
    align-self: center;
    line-height: 25px;
    margin-top: 0;
    text-align: center;
    @media (min-width: 700px) {
        font-size: 20px;
    }
`

export const GotoHomeBtn = styled.button`
    background-image: linear-gradient(to right, #348F50 0%, #56B4D3  51%, #348F50  100%);
    border: none;
    outline: none;
    margin-top: 10px;
    border-radius: 7px;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    border-radius: 10px;
    display: block;         
 

    &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
    }
         
    align-self: center;
    padding: 3px 20px 3px 20px;
    font-size: 17px;
    line-height: 35px;
    font-weight: 600;
    font-family: 'Mandali', sans-serif;
    cursor: pointer;
    @media (min-width: 700px) {
        font-size: 20px;
    }
`