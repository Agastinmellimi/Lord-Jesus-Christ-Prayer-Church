import styled from 'styled-components'


export const LoginBgContainer = styled.div`
     background: linear-gradient(175.18deg, rgb(8, 70, 67) 0%, rgba(60, 126, 126, 0) 152.19%);
     height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow: auto;
`

export const WebsiteLogo = styled.h1`
    font-family: Koulen;
    color: #ffffff;
    font-size: 30px;
    letter-spacing: 0.05em;
    line-height: 20px;
    letter-spacing: 0.05em;
    align-self: center;
    width: 90%;
    @media (min-width: 700px) {
        font-size: 40px;
        line-height: 30px;
        
}
`

export const LoginFlexContainer = styled.div`
   align-self: center;
   width: 90%;
   display:flex;
   flex-direction: column;
   font-family: Mandali;
   margin-top: 50px;
   
   
   @media (min-width: 700px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
   }
`
export const LoginFormContainer = styled.form`
   display: flex;
   flex-direction: column;
   
   justify-content: center;
   margin-top: 0;
   flex-grow: 1;
   order: 2;
   @media (min-width: 700px) {
    width: 50%;
    order: 1;
   }
`
export const LoginHeading = styled.h1`
   
    font-weight: 600;
    margin-top: 0;
    font-size: 30px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: rgb(100, 222, 215);
    margin-bottom: 40px;
`

export const LoginLabel = styled.label`
   font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: left;
    color: rgb(255, 255, 255);
    margin-bottom: 15px;
`

export const NameInput = styled.input`
     background: rgba(219, 220, 220, 0.27000001072883606);
     border-radius: 8px;
     border: none;
     outline: none;
     height: 44px;
     padding: 4px 6px 4px 6px;
     ${props => props.error && `
         border: 1px solid rgb(253, 134, 134);
     `}
     color: #f0f1f2;
     font-size: 17px;
     letter-spacing: 0.05em;
`
export const PasswordInput = styled.input`
     background: rgba(219, 220, 220, 0.27000001072883606);
     border-radius: 8px;
     border: none;
     outline: none;
     height: 44px;
     padding: 4px 6px 4px 6px;
     ${props => props.error && `
         border: 1px solid rgb(253, 134, 134);
     `}
     color: #f0f1f2;
     font-size: 17px;
     letter-spacing: 0.05em;
`

export const LoginImage = styled.img`
   
   width: 100%;
   border-radius: 10px;
   margin-bottom: 30px;
   max-width: 370px;
   order: 1;
   align-self: center;
   @media (min-width: 700px) {
    margin-left: 30px;
    margin-bottom: 0;
    width: 50%;
    max-width: 500px;
    order: 2;
    height: 100%;
   }
   animation: moving 10s ease-in-out infinite alternate;
   @keyframes moving {
       to {
        transform: translateY(-10px) skew(3deg, 2deg) scale(1);
       
       } from {
        transform: scale(0.9);
       }
   }
`


export const InputFieldContainer = styled.div`
margin-bottom: 20px;
display: flex;
flex-direction: column;
`


export const EyeBtn = styled.button`
     border: none;
     outline: none;
     cursor: pointer;
     background-color: transparent;
     font-size: 27px;
     padding-top: 3px;
   
     color: #fff;
     align-self: flex-start;
     margin: 0;
     display: flex;
     align-items: center;
     font-family: Mandali;
     justify-content: space-around;
`
export const LabelContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
`

export const LoginButton = styled.button`
    width: 40%;
    max-width: 230px;
    height: 44px;
    background: rgb(99, 222, 214);
    border-radius: 8px;
    font-size: 25px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: rgb(46, 42, 72);
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: start;

    margin-left: auto;
    cursor: pointer;
    
`
export const BtnContainer = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
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

export const LoginUserErrorMsg = styled.p`
      font-family: Mandali;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 10px;
        color: rgb(253, 134, 134);
`