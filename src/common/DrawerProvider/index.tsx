import React, { createContext, useState } from 'react'

export type DrawerContextType = {
  title: string,
  settitle: React.Dispatch<React.SetStateAction<string>>,
  content: React.ReactNode,
  setcontent: React.Dispatch<React.SetStateAction<React.ReactNode>>
  hide: boolean,
  sethide: React.Dispatch<React.SetStateAction<boolean>>
}

// export const drawerContext = createContext<DrawerContextType>({
//   title: undefined, settitle: undefined, content: undefined, setcontent: undefined, hide: false, sethide: undefined
// })

export const drawerContext = createContext({} as DrawerContextType)

export interface IDrawerProviderProps {
  children: React.ReactNode
}

const emptyComponent = () => (<div>empty</div>)

const DrawerProvider = ({ children }: IDrawerProviderProps) => {
  const [title, settitle] = useState<string>('untitled')
  const [hide, sethide] = useState<boolean>(true)
  const [content, setcontent] = useState<React.ReactNode>(emptyComponent)
  return (
    <drawerContext.Provider value={{ title, settitle, content, setcontent, hide, sethide } }>
      {children}
    </drawerContext.Provider>
  )
}

export default DrawerProvider
