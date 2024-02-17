import styled from 'styled-components'


export const ContactContainer = styled.div`
      background: linear-gradient(179.06deg, rgb(87, 121, 245) -6.49%, rgba(17, 11, 45, 0.98) -6.48%, rgba(124, 134, 144, 0.43) 148.77%);
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow: auto;
`

export const Label = styled.label`
    font-family: Mandali;
    font-size: 20px;
    color: #ffff;
`

export const Input = styled.input`
    outline: none;
    background: rgba(219, 219, 219, 0.27000001072883606);
    padding: 2px 8px 2px 8px;
    font-size: 18px;
    font-family: Mandali;
    letter-spacing: 1px;
    border: none;
    border-radius: 8px;
    color: #d9dade;
    ${props => props.nameEr && `
          border: 2px solid rgb(253, 134, 134);
    `}
    ${props => props.numEr && `
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

export const InputFeildContainer = styled.form`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    order: 2;
    @media (min-width: 768px) {
        order: 1;

    }
`
export const ContactContentContainer = styled.div`
    align-self: center;
    width: 90%;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`

export const ContactImage = styled.img`
    width: 100%;
    order: 1;
    @media (min-width: 768px) {
        width: 50%;
        max-width: 500px;
        order: 2;
        margin-left: 30px;
    }
    animation: slowMove 9s ease-in-out infinite alternate;
   @keyframes slowMove {
       to {
        transform: translateY(-10px) skew(4deg, 2deg) scale(1.1) rotate(10deg);
       
       } from {
        transform: scale(0.9);
        
       }
   }
`

export const TextArea = styled.textarea`
    outline: none;
    background: rgba(219, 219, 219, 0.27000001072883606);
    padding: 2px 8px 2px 8px;
    font-size: 18px;
    font-family: Mandali;
    letter-spacing: 1px;
    line-height: 20px;
    height: 100px;
    border: none;
    border-radius: 8px;
    color: #c5c6c9;
    ${props => props.msgEr && `
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

export const SubmitButton = styled.button`
    background: rgb(245,250,251);
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    margin-top: 15px;
    border-radius: 10px;
    font-family: Mandali;
    margin-left: auto;
    font-weight: 600;
    font-size: 20px;
    color: #0a0f45;
    padding: 5px 20px 5px 20px;
    background: rgb(222,224,224);
    background: linear-gradient(90deg, rgba(222,224,224,1) 0%, rgba(6,154,145,1) 100%, rgba(11,248,233,0.7541141456582633) 100%);
    ${props => props.load && `
          padding: 5px 40px;
    `}
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

export const BtnContainer = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
`

export const ApiError = styled.p`
    font-family: Mandali;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: rgb(253, 134, 134);
    @media (min-width: 700px) {
        font-size: 16px;
    }
`

export const SuccessText = styled.p`
    font-family: Mandali;
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;
    color: #66e1e3;
    margin-bottom: 0;
    margin-top: 0;
    line-height: 37px;
    @media (min-width: 700px) {
        font-size: 30px;
    }
`

export const RefreshBtn = styled.button`
    border: none;
    outline: none;
    background-color: #28b087;
    color: #343635;
    font-size: 20px;
    border-radius: 7px;
    font-family: Mandali;
    font-weight: 600;
    padding: 5px 16px 5px 16px;
    cursor: pointer;
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
    animation: slowMove 9s ease-in-out infinite alternate;
   @keyframes slowMove {
       to {
        transform: translateY(-10px) skew(4deg, 2deg) scale(1) rotate(10deg);
       
       } from {
        transform: scale(0.9);
        
       }
   }
`