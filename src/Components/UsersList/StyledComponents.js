import styled from 'styled-components'



export const Heading = styled.h1`
     font-family: Mandali;
    color: #E9E8E4;
    width: 90%;
    align-self: center;
    font-size: 20px;
    line-height: 30px;
    margin-top: 30px;
    margin-bottom: 15px;
    @media (min-width: 700px) {
        font-size: 30px;
    }
    @media (max-width: 300px) {
        font-size: 16px;
    }
`
export const UsersListContainer = styled.ul`
     padding-left: 0;
     display: flex;
     flex-direction: row;
     align-items: center;
     flex-wrap: wrap;
     width: 100%;
     align-self: center;
     list-style: none;
     @media (min-width: 700px) {
        flex-direction: row;
        align-items: stretch;
        justify-content: space-between;
   }
`

export const User = styled.li`
    list-style: none;
    background: linear-gradient(180deg, rgb(85, 22, 58) -137.29%, rgba(211, 208, 210, 0) 100%);
    border: 1px solid #c3d0e6;
    border-radius: 7px;
    padding: 5px 20px 5px 20px;
    display: flex;
    align-items: center;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    width: 100%;
     box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
     transition: all 0.5s ease-in-out;
     &:hover {
        transform: translateY(-5px);
     }
     margin-bottom: 20px;
    
   @media (max-width: 400px) {
      flex-direction: column;
      justify-content: flex-start;
   }
   @media (min-width: 768px) {
       width: 45%;
   }
`
export const ImageUser = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    @media (max-width: 700px) {
        width: 40px;
        height: 40px;
    }
    @media (max-width: 400px) {
      align-self: flex-start;
      margin-top: 5px;
   }
` 
export const UserName = styled.p`
    font-family: Mandali;
    font-size: 25px;
    color: ${props => props.root === 'true' ? '#6ec4db' : "#fff"};
    margin-left: 20px;
    margin-right: 20px;
    flex-grow: 1;
    line-height: 25px;
    font-family: Mandali;
    font-weight: ${props => props.root === 'true' ? 600 : 900};
    letter-spacing: 0.03em;
    @media (max-width: 700px) {
        font-size: 16px;
    }
    @media (max-width: 400px) {
      align-self: flex-start;
      margin-left: 0;
      font-size: 15px;
      margin-top: 0;
      margin-bottom: 3px;
   }
   
`
export const DeleteBtn = styled.button`
      border: none;
    outline: none;
    cursor: pointer;
    font-size: 20px;
    color: #fff;
    margin-left: auto;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    background-color: transparent;
    @media (min-width: 500px) {
        font-size: 25px;
    }
    display: flex;
    align-items: center;
    transition: transform 0.5s ease-in-out;
    &:hover {
        transform: scale(0.9);
    }
`
export const PagenationContainer = styled.div`
    width: 90%;
    align-self: center;
    display: flex;
    align-items: center;
`

export const PrevButton = styled.button`
   background-color: transparent;
   outline: none;
   border: none;
   color: #fff;
   margin-right: 20px;
   -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
   color: rgb(10, 233, 248);
   ${props => props.disabled && `
       display: none;
   `}
   font-size: 25px;
`
export const NextButton = styled.button`
   background-color: transparent;
   outline: none;
   border: none;
   color: #fff;
   -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
   margin-right: 20px;
   font-size: 25px;
   color: rgb(10, 233, 248);
   ${props => props.disabled && `
       display: none;
   `}
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
      margin-top: 50px;
      margin-bottom: 50px;
`

export const PopupContainer = styled.div`
     background-color: #fff;
     padding: 3px 20px 3px 20px;
     display: flex;
     flex-direction: column;
`

export const BtnContainer = styled.div`
     display: flex;
     align-items: center;
     flex-wrap: wrap;
     align-self: flex-end;
`
export const Button = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    background-color: ${props => props.delete === 'true' ? '#eb4946' : '#2c659c'};
    color: #fff;
    font-weight: 600;
    margin-right: 10px;
    font-family: Mandali;
    margin-top: 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    font-size: 30px;
    letter-spacing: 0.03em;
    padding: 5px 10px;
`
export const ConfirmText = styled.p`
    font-family: Mandali;
    font-size: 18px;
    line-height: 20px;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    letter-spacing: 0.03em;
    color: #2f2f30;
    font-weight: 500;
`
export const DeleteText = styled.p`
    font-family: Mandali;
    font-weight: 500;
    font-size: 16px;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    line-height: 18px;
    color: rgb(253, 134, 134);
    width: 90%;
    align-self: center;
    @media (min-width: 700px) {
        font-size: 19px;
    }
    margin-bottom: 0;
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
      -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
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
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
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
