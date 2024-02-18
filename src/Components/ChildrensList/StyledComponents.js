import styled from 'styled-components'


export const ChildrenContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow: auto;
    background: linear-gradient(171.7deg, rgb(72, 5, 41) 0%, rgba(201, 154, 223, 0) 196.03%);
`

export const Heading = styled.h1`
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
export const ChildrensListContainer = styled.ul`
     padding-left: 0;
     display: flex;
     flex-direction: row;
     align-items: center;
     flex-wrap: wrap;
     width: 90%;
     align-self: center;
     list-style: none;
     @media (min-width: 700px) {
        flex-direction: row;
        align-items: stretch;
        justify-content: space-between;
   }
`

export const Children = styled.li`
    list-style: none;
    background: rgba(99, 222, 214, 0.3100000023841858);
    border: 1px solid rgb(105, 238, 230);
    border-radius: 7px;
    padding: 5px 20px 5px 20px;
    display: flex;
    align-items: center;
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
export const ImageChildren = styled.img`
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
export const ChildrenName = styled.p`
    font-family: Mandali;
    font-size: 18px;
    color: #fff;
    margin-left: 20px;
    margin-right: 20px;
    flex-grow: 1;
    line-height: 25px;
    font-family: Mandali;
    font-weight: 600;
    letter-spacing: 0.03em;
    @media (max-width: 700px) {
        font-size: 14px;
    }
    @media (max-width: 400px) {
      align-self: flex-start;
      margin-left: 0;
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
export const DeleteText = styled.p`
    font-family: Mandali;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: rgb(253, 134, 134);
    width: 90%;
    align-self: center;
    @media (min-width: 700px) {
        font-size: 19px;
    }
    margin-bottom: 0;
`
export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
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
    font-size: 30px;
    letter-spacing: 0.03em;
    padding: 5px 10px;
`
export const ConfirmText = styled.p`
    font-family: Mandali;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.03em;
    color: #2f2f30;
    font-weight: 500;
`

export const InputChildContainer = styled.div`
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
    font-size: 20px;
    color: #dbd9da;
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
    ${props => props.nameerr === 'true' && `
          border: 2px solid rgb(253, 134, 134);
    `}
    ${props => props.newerr === 'true' && `
          border: 2px solid rgb(253, 134, 134);
    `}
    ${props => props.preverr === 'true' && `
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
    max-width: 200px;
    align-self: center;
    order: 1;
    @media (min-width: 768px) {
        width: 50%;
        max-width: 300px;
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
export const RadioInputContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
`
export const RadioInput = styled.input`
     appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid #ccc;
    outline: none;
    cursor: pointer;
    &:checked {
        background: linear-gradient(90deg, rgba(222,224,224,1) 0%, rgba(6,154,145,1) 100%, rgba(11,248,233,0.7541141456582633) 100%);
        border-color: 1px solid #007bff;
        } 
`
export const RadioLabel = styled.label`
    margin-right: 15px;
    font-size: 15px;
    font-family: Mandali;
    margin-top: 4px;
    color: #fff;
    cursor: pointer;
    letter-spacing: 0.03em;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`

export const InputSubmitBtn = styled.button`
    background: ${props => props.add === 'true' ? '#467ab3' : '#d92932'};
    outline: none;
    border: none;
    cursor: pointer;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    margin-top: 15px;
    border-radius: ${props => props.add === 'true' ? '10px' : '20px'};
    font-family: Mandali;
    margin-left: auto;
    font-weight: 600;
    font-size: 20px;
    color: #fff;
    line-height: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
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
export const UpdateBtnContainer = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
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
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
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
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
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
