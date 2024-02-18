import styled from 'styled-components'


export const MessagesContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow: auto;
    background: linear-gradient(172.57deg, rgb(1, 72, 46) 0%, rgba(139, 198, 184, 0) 187.8%);
`

export const MessagesHeading = styled.h1`
    font-family: Mandali;
    color: #E9E8E4;
    width: 90%;
    align-self: center;
    font-size: 20px;
    line-height: 30px;
    @media (min-width: 700px) {
        font-size: 30px;
    }
`

export const HighlatedText = styled.span`
    font-family: 'Mandali', sans-serif;
    color: #C5AE5E;
`

export const MessagesListContainer = styled.ul`
   padding-left: 0;
   display: flex;
   align-items: center;
   width: 90%;
   align-self: center;
   list-style: none;
   flex-wrap: wrap;
   justify-content: space-between;
   @media (min-width: 700px) {
     justify-content: flex-start
   }
`

export const Message = styled.li`
   background: rgba(99, 222, 214, 0.30000001192092896);
   border: 2px solid rgb(10, 233, 248);
   border-radius: 7px;
   color: #ffff;
   width: 100%;
   padding: 5px 15px 5px 12px;
   margin-bottom: 25px;
   @media (min-width: 700px) {
        width: 45%;
        max-width: 350px;
        margin-right: 20px;
   }
   display: flex;
   flex-direction: column;
   transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
    &:hover {
        transform: scale(1.1);
        box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, 
        rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
         rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
`
export const FirstLetterContainer = styled.div`
   width: 40px;
   height: 40px;
   display: flex;
   font-family: Mandali;
   justify-content: center;
   align-items: center;
   background: rgba(219, 219, 219, 0.27000001072883606);
   border: 1px solid #E0DDDD;
   border-radius: 50%;
   font-size: 20px;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   @media (min-width: 500px) {
       width: 50px;
       height: 50px;
    }
    transition: transform 0.5s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`

export const NameContainer = styled.div`
      display: flex;
      align-items: center;
      margin-top: 0;
      margin-bottom: 0;
     
      
      
`
export const MessageContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0;
    padding-left: 7px;
    margin-bottom: 0;
`

export const Name = styled.p`
   color: rgb(255, 255, 255);
   font-size: 25px;
   line-height: 25px;
   flex-grow: 1;
   margin-left: 20px;
   font-family: Mandali;
  letter-spacing: 0.05em;
  word-break: break-all;
  @media (min-width: 500px) {
    font-size: 30px;
    }
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

export const Description = styled.p`
     margin-top: 0;
     font-family: Mandali;
    font-size: 13px;
    margin-bottom: 0;
    letter-spacing: 0.05em;
    color: rgb(255, 255, 255);
    word-break: break-all;
    @media (min-width: 400px) {
        font-size: 16px;
    }
`

export const MessageDeletebtn = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 20px;
    color: #fff;
    margin-left: auto;
    align-self: flex-end;
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

export const EmptyImage = styled.img`
     width: 90%;
     margin-top: 30px;
     max-width: 300px;
     align-self: center;
`
export const EmptyText = styled.p`
    font-family: Mandali;
    font-size: 20px;
    font-weight: 600;
    align-self: center;
    text-align: center;
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
   margin-right: 20px;
   font-size: 25px;
   color: rgb(10, 233, 248);
   ${props => props.disabled && `
       display: none;
   `}
`