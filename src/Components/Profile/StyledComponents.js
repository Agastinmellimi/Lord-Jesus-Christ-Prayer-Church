import styled from 'styled-components'


export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow: auto;
    background: linear-gradient(171.7deg, rgb(72, 5, 41) 0%, rgba(201, 154, 223, 0) 196.03%);
`

export const ProfileContainer = styled.div`
   width: 90%;
   margin-top: 30px;
   border: 2px solid #c3d0e6;
   box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
   border-radius: 10px;
   padding: 15px 20px 10px 20px;
   align-self: center;
   display: flex;
   align-items: flex-start;
   @media (max-width: 500px) {
    flex-direction: column;
    align-items: stretch;
   }
`

export const ProfileImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 30px;
    @media (max-width: 500px) {
         width: 50px;
         height: 50px;
   }
`
export const ProfileContetContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 0;
    flex-grow: 1;
    margin-top: 0;
`

export const Username= styled.p`
    font-family: "Mandali", sans-serif;
    font-size: 40px;
    margin-top: 5px;
    font-weight: 600;
    color: #fff;
    line-height: 45px;
    letter-spacing: 0.07em;
    margin-bottom: 10px;
    @media (max-width: 500px) {
         font-size: 20px;
   }
   @media (max-width: 370px) {
        font-size: 18px;
        margin-bottom: 5px;
   }
`
export const Email= styled.p`
    margin-top: 3px;
    font-family: "Mandali", sans-serif;
    font-size: 20px;
    color: #c3d0e6;
    margin-bottom: 5px;
    word-break: break-word;
    @media (max-width: 500px) {
        font-size: 15px;
   }
   @media (max-width: 370px) {
        margin-top: 0;
        line-height: 15px;
        font-size: 12px;
   }
`
export const HighlatedText = styled.span`
    font-family: "Mandali", sans-serif;
    color: #96b3e0;
    
`

export const Button = styled.button`
     outline: none;
     border: none;
     cursor: pointer;
     font-weight: 500;
     padding: 7px 30px 7px 30px;
     line-height: 25px;
     font-size: 20px;
     border-radius: 20px;
     color: #ffff;
     -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
     background-color: transparent;
     box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
     border: 2px solid #c3d0e6;
     margin-right: 20px;
     margin-bottom: 23px;
     @media (max-width: 700px) {
        font-size: 16px;
        padding: 3px 20px 3px 20px;
        margin-right: 10px;
        margin-bottom: 10px;
     }
     @media (max-width: 390px) {
        font-size: 13px;
        padding: 3px 15px 3px 15px;
        margin-right: 8px;
        margin-bottom: 8px;
     }
     font-family: Mandali;
     transition: all 0.1s ease-in-out, transform 0.5s ease-in-out;
     &:hover {
        transform: translateY(-3px);
     }
     ${props => props.active === 'true' && `
         background-color: #2b5ea6;
         color: #f2f2cb;
         font-weight: 600;
     `}
`
export const BtnContainer = styled.div`
     display: flex;
     margin-top: 15px;
     flex-wrap: wrap;
     align-items: center;
     -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`

export const NameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const LogoutBtn = styled.button`
      background-color: transparent;
      outline: none;
      cursor: pointer;
      border: none;
      margin-left: auto;
      margin-top: 8px;
      color: #fff;
      font-size: 30px;
      -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
      @media (max-width: 500px) {
        font-size: 20px;
      }
`

export const LogButton = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    background-color: ${props => props.logout === 'true' ? '#eb4946' : '#2c659c'};
    color: #fff;
    font-weight: 600;
    margin-right: 10px;
    font-family: Mandali;
    margin-top: 10px;
    border-radius: 8px;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.03em;
    padding: 5px 20px 7px 20px;
`
export const ConfirmText = styled.p`
    font-family: Mandali;
    font-size: 19px;
    line-height: 20px;
    letter-spacing: 0.03em;
    color: #2f2f30;
    font-weight: 500;
`
export const PopupContainer = styled.div`
     background-color: #fff;
     padding: 3px 20px 3px 20px;
     display: flex;
     flex-direction: column;
`

export const LogBtnContainer = styled.div`
     display: flex;
     align-items: center;
     flex-wrap: wrap;
     align-self: flex-end;
     -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
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