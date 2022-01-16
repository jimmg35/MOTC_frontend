import React, { createContext, useState } from 'react'
import Map from '@arcgis/core/Map'
import { map } from '../src/'

export type MapContextType = {
  map: Map
}

export const mapContext = createContext({} as MapContextType)

export interface IDrawerProviderProps {
  children: React.ReactNode
}

export const MapProvider = ({ children }: IDrawerProviderProps) => {
  return (
    <mapContext.Provider value={
      { map: map }
    }>
      {children}
    </mapContext.Provider>
  )
}