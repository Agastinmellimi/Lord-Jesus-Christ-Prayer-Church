import {createContext} from 'react'


const HandlerContext = createContext({
    activeTab: '',
    setActiveTab: () => {}
})

export default HandlerContext