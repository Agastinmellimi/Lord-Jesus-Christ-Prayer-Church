import styled from 'styled-components'


export const ViewContainer = styled.div`
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

export const ViewChildrenContainer = styled.ul`
      padding-left: 0;
      width: 90%;
      align-self: center;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      
      
`

export const ChildrenStatus = styled.li`
     display: flex;
     align-items: center;
     border-radius: 8px;
     margin-bottom: 20px;
     background: rgba(219, 219, 219, 0.27000001072883606);
     width: 100%;
     border: ${props => props.count > 0 ? 'none': "2px solid #f7a1a7"};
     padding: 5px 20px 5px 20px;
     @media (min-width: 900px ) {
        width: 48%;
     }
     @media (max-width: 400px) {
        flex-direction: column;
        align-items: stretch;
        
      }
      transition: transform 0.5s ease-in-out;
      &:hover {
        transform: translateY(-5px);
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
   color: #fff;
   
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   @media (min-width: 500px) {
       width: 50px;
       height: 50px;
    }
    transition: transform 0.5s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
    @media (max-width: 400px) {
      margin-top: 7px;
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
export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 150px;
`

export const ChildrenName = styled.p`
    font-family: Mandali;
    font-size: 15px;
    color: #ffff;
    margin-left: 20px;
    margin-right: 20px;
    flex-grow: 1;
    line-height: 25px;
    font-family: Mandali;
    font-weight: 600;
    letter-spacing: 0.03em;
    @media (max-width: 700px) {
        font-size: 14px;
        margin-left: 12px;
        font-size: 13px;
        margin-right: 10px;
    }
    @media (max-width: 400px) {
      align-self: flex-start;
      margin-left: 0;
      text-align: left;
      margin-top: 4px;
      margin-bottom: 0px;
   }
`

export const Presents = styled.p`
      font-family: Mandali;
      font-size: 20px;
      
      color: #fff;
      display: flex;
      align-items: center;
      letter-spacing: 0.02em;
      @media (max-width: 700px) {
        font-size: 14px;
      }
      @media (max-width: 400px) {
         align-self: flex-end;
      }
`

export const AttendanceCount = styled.span`
        font-size: 23px;
        margin-left: 3px;
        font-weight: 700;
        color: ${props => props.count > 0 ? '#daf291' : '#f7a1a7'};
        @media (max-width: 700px) {
            font-size: 15px
        }
`

export const FailureContainer = styled.div`
      display: flex;
      width: 90%;
      align-self: center;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
`

export const SelectDateContainer = styled.div`
   width: 90%;
   align-self: center;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   @media (max-width: 700px){
        flex-direction: column;
        align-items: flex-start;
   }
`
export const SearchDataContainer = styled.div`
    align-self: center;
    display: flex;
    margin-top: 20px;
    @media (max-width: 700px){
        align-self: flex-start;
   }
`

export const SearchDateInput = styled.input`
     outline: none;
     border: none;
     background-color: #fff;
     color: #000;
     padding: 3px 6px;
     margin-right: 10px;
     font-size: 16px;
     border-radius: 6px;
`

export const SearchBtn = styled.button`
    border: none;
    outline: none;
    border-radius: 6px;
    background-color:  #3296a6;
    cursor: pointer;
    color: #fff;
    font-size: 17px;
    font-weight: 600;
    padding: 10px 13px 5px 13px;
`

export const SelctDateHead = styled.h1`
        font-family: Mandali;
        color: #E9E8E4;
        align-self: center;
        font-size: 18px;
        line-height: 30px;
        letter-spacing: 0.05em;
        @media (min-width: 701px) {
            font-size: 30px;
        }
        @media (max-width: 700px){
          align-self: flex-start;
        }
        margin-right: 10px;
        margin-bottom: 5px;
`
export const SelectInput = styled.select`
     outline: none;
     color: #000;
     font-size: 18px;
     font-family: Mandali;
     letter-spacing: 0.03em;
     cursor: pointer;
     font-weight: 600;
     background-color: rgba(219, 219, 219, 0.27000001072883606);
     padding: 3px 13px 3px 13px;
     border: 1px solid #fff;
     border-radius: 7px;
     @media (max-width: 500px) {
           font-size: 14px;
           padding: 5px 9px 5px 9px;
     }
`
export const SelectDateInputContainer = styled.div`
      display: flex;
      align-items: center;
      margin-top: 20px;
`
export const DateLabel = styled.label`
       font-family: Mandali;
       font-size: 18px;
       margin-right: 10px;
       line-height: 20px;
       color: #fff;
`
export const DateOption = styled.option`
   font-family: Mandali;
   cursor: pointer;
   font-size: 20px;
`

export const DateContainer = styled.div`
       display: flex;
       flex-direction: column;
       width: 90%;
       align-self: center;
       margin-top: 20px;
       @media (min-width: 768px ) {
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
       }
`

export const SelectDateText = styled.p`
      font-family: Mandali;
      font-size: 16px;
      color: #fff;
      margin-left: 20px;
      letter-spacing: 0.03em;
      font-weight: 600;
      line-height: 20px;
      text-align: center;
      @media (min-width: 768px ) {
          font-size: 30px;
          text-align: left;
          line-height: 40px;
       }
`

export const DateImage = styled.img`
     width: 100%;
     max-width: 200px;
     align-self: center;
     @media (min-width: 768px ) {
         max-width: 300px;
      }
`
export const DailyStatusChildern = styled.li`
     display: flex;
     align-items: center;
     border-radius: 8px;
     margin-bottom: 20px;
     background: ${props => props.present === 1 ? 'rgba(155, 241, 153, 0.3100000023841858)' : 'rgba(219, 219, 219, 0.27000001072883606)'};
     width: 100%;
     border: ${props => props.present === 0 ? "2px solid #f7a1a7" : '2px solid #4eed69'};
     padding: 5px 20px 5px 20px;
     @media (min-width: 900px ) {
        width: 48%;
     }
     @media (max-width: 400px) {
        flex-direction: column;
        align-items: stretch;
        
      }
      transition: transform 0.5s ease-in-out;
      &:hover {
        transform: translateY(-5px);
      }
`

export const SeeAttendBtn = styled.button`
    border: none;
    outline: none;
    background-image: linear-gradient(to right, #C02425 0%, #F0CB35  51%, #C02425  100%);
    padding: 7px 30px 7px 30px;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: #010e24;   
    font-family: Mandali;         
    border-radius: 10px;
    font-weight: 600;
    align-self: flex-end;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        background-position: right center; /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
    } 
    @media (max-width: 700px) {
      font-size: 17px;
      padding: 7px 20px 7px 20px;
    }    
         
`

export const BtnContainer = styled.div`
     width: 90%;
     align-self: center;
`