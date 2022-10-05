/* eslint-disable */
import { airServiceApiConfig } from './config'
import { IRouteQueryParams } from '../../lib/Controller/RouteController'

export const QueryRouteAnalysis = async (Network_Query: IRouteQueryParams) => {
        await $.ajax({
        url: '/api/MobileSensor/queryMSHNetwork',
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        data: Network_Query,
        success: (results) => {
            console.log(results);
         },
         error: () => {
             alert("該時段沒有資料");
         }
     });
}

// 'startDate': _from_date,
//         'endDate': _end_date,
//         'startTime': from_time,
//         'endTime': end_time,
//         'extent': extent,
//         'interval_st': interval_st,
//         'interval_et': interval_et,
//         'weekdays': _weekdays,
//         'rmdates': rmdates
export const QueryRouteAnalysis2 = async (Network_Query: IRouteQueryParams) => {
  // console.log()
    const response = await fetch(
        `${airServiceApiConfig.serverString}/api/MobileSensor/queryMSHNetwork?startDate=${Network_Query.startDate}&endDate=${Network_Query.endDate}&startTime=${Network_Query.startTime}&endTime=${Network_Query.endTime}&extent=${Network_Query.extent}&interval_st=${Network_Query.interval_st}&interval_et=${Network_Query.interval_et}&weekdays=${Network_Query.weekdays}&rmdates=${Network_Query.rmdays}`,
        {
          method: 'GET'
        }
      )
      return response
}
// export const QueryFixedData = async (Network_Query:IRouteQueryParams) => {
//   const response = await fetch(
    
//   )
// }

export const routeJsonPath = `${airServiceApiConfig.serverString}/Contents/network.json`
