import styled from 'styled-components'


export const Heading = styled.h1`
     font-family: Mandali;
    color: #E9E8E4;
    width: 90%;
    align-self: center;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 0;
    margin-top: 30px;
    @media (min-width: 700px) {
        font-size: 30px;
    }
    @media (max-width: 300px) {
        font-size: 16px;
    }
`
export const InputContainer = styled.div`
    align-self: center;
    width: 90%;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`
export const InputFeildContainer = styled.form`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    order: 2;
    @media (min-width: 768px) {
        order: 1;
    }
    ${props => props.add === 'true' && `
       
          @media (min-width: 768px) {
                order: 2;
            }
    `}
`
export const Label = styled.label`
    font-family: Mandali;
    font-size: 18px;
    color: #dbd9da;
    margin-top: 5px;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`

export const Input = styled.input`
    outline: none;
  
    padding: 7px 8px 7px 8px;
    font-size: 18px;
    font-family: Mandali;
    line-height: 20px;
    letter-spacing: 1px;
    background-color: transparent;
    border: 1px solid #c2bcbe;
    border-radius: 8px;
    color: #fff;
    ${props => props.emailerr === 'true' && `
          border: 2px solid rgb(253, 134, 134);
    `}
    ${props => props.passworderr === 'true' && `
          border: 2px solid rgb(253, 134, 134);
    `}
    ${props => props.nameerr === 'true' && `
           border: 2px solid rgb(253, 134, 134);
    `}
   
    ::placeholder {
        color: #d1cfd0 !important; 
        opacity: 1 !important;/* Change to desired color */
    }

    &:focus::placeholder {
        color: #b5b3b4 !important;
        opacity: 1 !important; /* Change to desired color */
    }
`

export const InputImage = styled.img`
    width: 100%;
    max-width: 270px;
    align-self: center;
    order: 1;
    @media (min-width: 768px) {
        width: 50%;
        max-width: 370px;
        order: 2;
        margin-left: 30px;
    }
    ${props => props.add === 'true' && `
          @media (min-width: 768px) {
                order: 1;
                margin-right: 30px;
                margin-left: 0;
            }
           
    `}
    animation: slide 5s ease-in-out infinite alternate;
   @keyframes slide {
       to {
        transform: translateY(-10px) skew(3deg, 2deg) rotate(-3deg);
       
       } from {
        transform: translateY(-5px);
        
       }
   }
`
export const InputSubmitBtn = styled.button`
    background: #948443;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    margin-top: 15px;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    border-radius: ${props => props.add === 'true' ? '10px' : '20px'};
    font-family: Mandali;
    margin-left: auto;
    font-weight: 600;
    font-size: 20px;
    color: #fff;
    line-height: 20px;
    padding: 12px 23px 12px 23px;
    ${props => props.loading === 'true' && `
        padding: 7px 45px 7px 45px;
    `}
    ${props => props.addload === 'true' && `
         padding: 7px 35px;
    `}
`

export const ErrorMsg = styled.p`
        font-family: Mandali;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        margin-top: 2px;
        margin-bottom: 0;
        line-height: 10px;
        color: rgb(253, 134, 134);
`
export const LabelContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
`
export const EyeBtn = styled.button`
     border: none;
     outline: none;
     cursor: pointer;
     background-color: transparent;
     font-size: 30px;
     padding-top: 3px;
     color: #fff;
     align-self: flex-start;
     margin-top: 10px;
     display: flex;
     align-items: center;
     font-family: Mandali;
     justify-content: space-around;
`

export const SuccessText = styled.p`
    font-family: Mandali;
    font-weight: 500;
    font-size: 17px;
    margin-bottom: 5px;
    letter-spacing: 0.03em;
    color: #fff;
    margin-bottom: 0;
    font-weight: 600;
    margin-top: 0;
    line-height: 18px;
    @media (min-width: 700px) {
        font-size: 25px;
         line-height: 30px;
    }
`

export const RefreshBtn = styled.button`
    border: none;
    outline: none;
    background-color: #e02d5d;
    color: #fff;
    font-size: 20px;
    border-radius: 20px;
    font-family: Mandali;
    font-weight: 600;
    line-height: 20px;
    padding: 9px 20px 9px 20px;
    cursor: pointer;
    letter-spacing: 0.05em;
    margin-right: 10px;
    margin-top: 20px;
    transition: transform 0.5s ease-in-out;
    @media (min-width: 768px) {
        margin: normal;
    }
    
`

export const SendSuccessContainer = styled.div`
    align-self: center;
    width: 90%;
    display: flex;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 0;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`

export const SuccessTextContainer = styled.div`
    flex-grow: 1;
    order: 2;
    margin-top: 0;
    text-align: center;
    @media (min-width: 768px) {
        order: 1;
        text-align: left;
    }
`

export const SuccessImage = styled.img`
    width: 100%;
    max-width: 330px;
    order: 1;
    margin: auto;
    @media (min-width: 768px) {
        width: 50%;
        max-width: 400px;
        order: 2;
        margin-left: 30px;
    }
    animation: slowRotate 9s ease-in-out infinite alternate;
   @keyframes slowRotate {
       to {
        transform: translateY(-10px) skew(4deg, 2deg) scale(1) rotate(-4deg);
       
       } from {
        transform: scale(0.9);
        
       }
   }
`
export const UserFailureContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-self: center;
    margin-top: 20px;
    margin-bottom: 20px;
    @media (min-width: 768px ) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`
export const NotFoundTextContainer = styled.div`
     display: flex;
     flex-direction: column;
`

export const NotFoundText = styled.p`
      font-family: Mandali;
      font-size: 17px;
      color: #fff;
      margin-left: 20px;
      letter-spacing: 0.03em;
      font-weight: 600;
      line-height: 18px;
      text-align: center;
      @media (min-width: 768px ) {
          font-size: 25px;
          text-align: right;
          margin-bottom: 10px;
          line-height: 30px;
       }
`
export const NotFoundImage = styled.img`
     width: 100%;
     max-width: 200px;
     align-self: center;
     @media (min-width: 768px ) {
         max-width: 300px;
      }
`
export const BackButton = styled.button`
    border: none;
    outline: none;
    background-color: #e02d5d;
    color: #fff;
    font-size: 20px;
    border-radius: 20px;
    font-family: Mandali;
    font-weight: 600;
    line-height: 20px;
    padding: 9px 20px 9px 20px;
    cursor: pointer;
    letter-spacing: 0.05em;
    transition: transform 0.5s ease-in-out;
    align-self: center;
    margin-top: 0;
    @media (min-width: 768px) {
        margin-left: auto;
    }
`