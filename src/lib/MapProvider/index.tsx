import { createContext } from 'react'
import ArcGIS from '../ArcGIS'

// export type ArcGisContextType = {
//   arcGis: ArcGIS
// }

export const arcGisContext = createContext(ArcGIS)

// export interface IDrawerProviderProps {
//   children: React.ReactNode
// }

// export const MapProvider = ({ children }: IDrawerProviderProps) => {
//   return (
//     <arcGisContext.Provider value={
//       ArcGIS
//     }>
//       {children}
//     </arcGisContext.Provider>
//   )
// }
