import { airServiceApiConfig } from './config'

export interface IDateTimeInterval {
  startDateTime: number
  endDateTime: number
}

export const QueryMobileHistory = async (dateTimeInterval: IDateTimeInterval, _extent: Array<number>) => {
  const response = await fetch(
    `${airServiceApiConfig.serverString}/api/MobileSensor/QueryMobileHistory?xmin=${_extent[0]}&ymin=${_extent[1]}&xmax=${_extent[2]}&ymax=${_extent[3]}&StartTime=${dateTimeInterval.startDateTime}&EndTime=${dateTimeInterval.endDateTime}`,
    {
      method: 'GET'
    }
  )
  return response
}

export const QueryMobileHistory2 = async (dateTimeInterval: IDateTimeInterval, deviceNameList: string) => {
  const response = await fetch(
    `${airServiceApiConfig.serverString}/api/MobileSensor/QueryMobileHistory2?DeviceNameList=${deviceNameList}&StartTime=${dateTimeInterval.startDateTime}&EndTime=${dateTimeInterval.endDateTime}`,
    {
      method: 'GET'
    }
  )
  return response
}

export const historyJsonPath = `${airServiceApiConfig.serverString}/Contents/history.json`
