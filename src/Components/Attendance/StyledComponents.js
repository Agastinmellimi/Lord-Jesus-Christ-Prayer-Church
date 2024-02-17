import styled from 'styled-components'



export const AttendanceContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow: auto;
    background: linear-gradient(172.57deg, rgb(1, 72, 46) 0%, rgba(139, 198, 184, 0) 187.8%);
`
export const Heading = styled.h1`
    font-family: Mandali;
    color: #E9E8E4;
    width: 90%;
    align-self: center;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.05em;
    @media (min-width: 700px) {
        font-size: 30px;
    }
`

export const HighlatedText = styled.span`
    font-family: 'Mandali', sans-serif;
    color: #C5AE5E;
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
    ${props => props.active && `
         background: rgba(155, 241, 153, 0.3100000023841858);
         border: 1px solid rgb(87, 245, 84);
     `}
     box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
     transition: all 0.5s ease-in-out;
     &:hover {
        transform: translateY(-4px);
     }
     margin-bottom: 20px;
  
   @media (max-width: 400px) {
      flex-direction: column;
      justify-content: flex-start;
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
export const AttendanceBtn = styled.button`
     border: none;
     outline: none;
     color: #fff;
     font-size: 22px;
     padding: 0;
     padding-right: 35px;
     display: flex;
     align-items: center;
     border-radius: 20px;
     transition: all 0.5s ease-in-out;
     cursor: pointer;
     margin-left: auto;
     background-color: #848785;
     ${props => props.active && `
         padding-left: 35px;
         padding-right: 0;
         color: #f0ee86;
         background-color: #46c922;
     `}
     
     @media (max-width: 400px) {
      align-self: flex-end;
     margin-bottom: 3px;
   }
     
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
export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`

export const DateInput = styled.input`
      border: none;
      outline: none;
      background: rgba(99, 222, 214, 0.3100000023841858);
      border: 1px solid rgb(105, 238, 230);
      padding: 5px 13px 5px 13px;
      border-radius: 7px;
      font-size: 16px;
      color: #fff;
      display: flex;
      width: 150px;
      margin-left: auto;
      align-self: flex-end;
      justify-content: center;
      font-family: Mandali;
`

export const DateContainer = styled.div`
      display: flex;
      align-items: center;
      width: 90%;
      align-self: center;
`
export const ChildrenContentContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-self: center;
    @media (min-width: 700px) {
        flex-direction: row;
        align-items: center;
    }
`
export const DetailsContainer = styled.div`
    flex-grow: 1;
    order: 2;
    margin-top: 0;
    text-align: center;
    @media (min-width: 700px) {
        order: 1;
        text-align: left;
    }
`

export const DetailsText = styled.p`
    font-family: Mandali;
    color: #fff;
    font-size: 18px;
    letter-spacing: 0.05em;
    font-weight: 600;
    line-height: 25px;
    margin-top: 0;
    @media (min-width: 700px) {
        font-size: 23px;
        line-height: 38px;
    }
`

export const SeeAttendBtn = styled.button`
    border: none;
    outline: none;
    background-image: linear-gradient(to right, #C02425 0%, #F0CB35  51%, #C02425  100%);
    padding: 1px 30px 1px 30px;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: #010e24;   
    font-family: Mandali;         
    border-radius: 10px;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    ${props => props.load && `
            padding: 8px 55px;
    `}
    &:hover {
        background-position: right center; /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
    }
    ${props => props.sub && `
        margin-left: auto;
    `}
    @media (max-width: 700px) {
      font-size: 17px;
      padding: 2px 20px 2px 20px;
    }          
         
`

export const GirlImage = styled.img`
    width: 100%;
    max-width: 320px;
    order: 1;
    margin: auto;
    @media (min-width: 768px) {
        width: 50%;
        max-width: 370px;
        order: 2;
        margin-left: 30px;
    }
    animation: slowMotion 5s ease-in-out infinite alternate;
    @keyframes slowMotion {
        to {
            transform: translateY(-10px) translateX(10px) skew(3deg, 2deg) scale(1) rotate(-3deg);
        
        } from {
            transform: scale(0.9);
        }
    }
`

export const SubitSuccessContainer = styled.div`
        width: 90%;
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 20px;
    @media (min-width: 700px) {
        flex-direction: row;
        align-items: center;
    }
`
export const SubmitSuccessImage  = styled.img`
    width: 100%;
    max-width: 230px;
    order: 1;
    margin: auto;
    @media (min-width: 768px) {
        width: 50%;
        max-width: 300px;
        margin-left: 30px;
    }
    animation: Motion 5s ease-in-out infinite alternate;
    @keyframes Motion {
        to {
            transform: translateY(-10px) translateX(15px) skew(3deg, 2deg);
        
        } from {
            transform: translateY(-5px);
        }
    }
`

export const SubmitScContentContainer = styled.div`
      flex-grow: 1;
      order: 2;
      margin-top: 0;
      text-align: center;
    @media (min-width: 700px) {
        text-align: right;
    }
`
export const SuccessText = styled.p`
     font-family: Mandali;
    color: #fff;
    font-size: 18px;
    letter-spacing: 0.05em;
    font-weight: 600;
    line-height: 25px;
    margin-top: 0;
    @media (min-width: 700px) {
        font-size: 23px;
        line-height: 38px;
    }
`