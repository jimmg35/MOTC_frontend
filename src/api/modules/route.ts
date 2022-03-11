/* eslint-disable */
import { airServiceApiConfig } from './config'
import { RouteQueryParams } from '../../lib/Controller/RouteController'

export const QueryRouteAnalysis = async (Network_Query: RouteQueryParams) => {
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
export const QueryRouteAnalysis2 = async (Network_Query: RouteQueryParams) => {
  Network_Query.startDate
    const response = await fetch(
        `${airServiceApiConfig.serverString}/api/MobileSensor/queryMSHNetwork?startDate`,
        {
          method: 'GET'
        }
      )
      return response
}
