import { airServiceApiConfig } from './config'

export const getRealTimeMobile = async () => {
  const response = await fetch('http://140.122.82.98:86/api/MobileSensor/getRealTimeMobile', {
    method: 'GET'
  })
  return response.json()
}

export const getRealTimeStation = async () => {
  const response = await fetch(`${airServiceApiConfig.serverString}/api/Station/getRealTimeStation`, {
    method: 'GET'
  })
  return response.json()
}

export const getRealTimeFixed = async (_extent: Array<number>, requestOptions: any) => {
  const response = await fetch(
    `http://140.122.82.98:86/api/FixedSensor/getRealTimeFixed?xmin=${_extent[0]}&ymin=${_extent[1]}&xmax=${_extent[2]}&ymax=${_extent[3]}`,
    requestOptions)
  return response.json()
}
