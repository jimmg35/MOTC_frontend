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

