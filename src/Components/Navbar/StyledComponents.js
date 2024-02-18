import styled from 'styled-components'


export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    align-self: center;
    width: 90%;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-bottom: 0;
   
`

export const NavLogo = styled.h1`
    font-family: Koulen;
    color: #ffffff;
    font-size: 27px;
    letter-spacing: 0.05em;
    line-height: 20px;
    flex-grow: 1;
    @media (min-width: 700px) {
      font-size: 30px;
   }
   @media (max-width: 350px) {
     font-size: 23px;
   }
`

export const NavOptionsConatiner = styled.ul`
display: none;
align-items: center;
padding-left: 0;
list-style: none;
@media (min-width: 700px) {
    display: flex;
}

`
export const NavOption = styled.li`
   font-family: Mandali;
   font-size: 22px;
   line-height: 20px;
   letter-spacing: 0.05em;
   margin-left: 30px;
   color: rgb(99, 222, 214);
   ${props => props.active && `
        color: #dbd174;
    `}
`

export const MenubarBtn = styled.button`
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: rgb(99, 222, 214);
    font-size: 30px;
    
    padding-top: 7px;
    @media (min-width: 700px) {
    display: none;
}
   @media (max-width: 350px) {
     font-size: 23px;
   }
`

export const MobileOptionsContainer = styled.ul`
    padding-left: 0;
    display: ${props => props.show ? 'flex' : 'none'};
    width: 90%;
    align-self: center;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 700px) {
        display: none;
    }
    animation: identifier 0.8s ease-in-out forwards alternate;
    
    @keyframes identifier {
        to {
            transform: translateY(0);
            opacity: 1;
        } from {
            transform: translateY(-40px);
            opacity: 0;
        }
    }

    background: rgba(219, 219, 219, 0.27000001072883606);
    border-radius: 8px;
    padding: 3px 7px 3px 7px;
    margin-top: 0;
`
export const MobileOption = styled.li`
    list-style: none;
    margin-right: 5px;
    font-size: 25px;
    color: #fff;
    margin-top: 3px;
    ${props => props.active && `
        color: #dbd174;
    `}
`

export const NavigateBtn = styled.button`
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #C5AE5E;
    font-size: 20px;
    margin-left: 15px;
    @media (min-width: 700px) {
        font-size: 30px;
    }
`