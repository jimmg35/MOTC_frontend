/* eslint-disable */

import PopupTemplate from '@arcgis/core/PopupTemplate'
import ClassBreaksRenderer from '@arcgis/core/renderers/ClassBreaksRenderer'
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'
import BaseController from './BaseController'
import { IBaseControllerParam } from './BaseController'

export interface ISymbologyControllerParam {
  mapSet: IBaseControllerParam
}

export default class SymbologyController extends BaseController {
  mobileTemplate: PopupTemplate
  fixedTemplate: PopupTemplate
  standardTemplate: PopupTemplate
  mobileRenderer: ClassBreaksRenderer
  fixedRenderer: ClassBreaksRenderer
  standardRenderer: ClassBreaksRenderer

  constructor(options: ISymbologyControllerParam) {
    super({
      map: options.mapSet.map,
      mapView: options.mapSet.mapView
    })
    let fieldsContent = {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "Device_Name",
          label: "識別碼"
        },
        {
          fieldName: "Datetime",
          label: "時間",
          format: {
            dateFormat: "short-date-short-time"
          }
        },
        {
          fieldName: "Flow",
          label: "流量"
        },
        {
          fieldName: "Pm2_5_UART",
          label: "PM 2.5 (UART)"
        },
        {
          fieldName: "Pm2_5_I2C",
          label: "PM 2.5 (I2C)"
        },
        {
          fieldName: "Pm2_5_AVG",
          label: "PM 2.5 (平均)"
        },
        {
          fieldName: "Voc",
          label: "Voc"
        },
        {
          fieldName: "Temperature",
          label: "溫度"
        },
        {
          fieldName: "Humidity",
          label: "濕度"
        },
        {
          fieldName: "Speed",
          label: "車速"
        }
      ]
    }
    //移動點彈跳式視窗
    this.mobileTemplate = new PopupTemplate({
      title: "移動感測器觀測資訊",
      content: [fieldsContent]
    })
    //固定點彈跳式視窗
    this.fixedTemplate = new PopupTemplate({
      title: "固定式感測器觀測資訊",
      content: [{
        type: "fields",
        fieldInfos: [
          {
            fieldName: "Device_Name",
            label: "識別碼"
          },
          {
            fieldName: "Datetime",
            label: "時間",
            format: {
              dateFormat: "short-date-short-time"
            }
          },
          {
            fieldName: "Pm2_5",
            label: "PM 2.5"
          },
          {
            fieldName: "Co",
            label: "CO"
          },
          {
            fieldName: "Voc",
            label: "VOC"
          },
          {
            fieldName: "So2",
            label: "SO2"
          },
          {
            fieldName: "No2",
            label: "NO2"
          },
          {
            fieldName: "Temperature",
            label: "溫度"
          },
          {
            fieldName: "Humidity",
            label: "濕度"
          }
        ]
      }]
    })
    //國家級監測站彈跳式視窗
    this.standardTemplate = new PopupTemplate({
      title: "國家級監測站觀測資訊",
      content: [{
        type: "fields",
        fieldInfos: [
          {
            fieldName: "Station_Name_",
            label: "名稱"
          },
          {
            fieldName: "Datetime",
            label: "時間",
            format: {
              dateFormat: "short-date-short-time"
            }
          },
          {
            fieldName: "Pm2_5",
            label: "PM 2.5"
          },
          {
            fieldName: "Pm10",
            label: "PM 10"
          },
          {
            fieldName: "Co",
            label: "CO"
          },
          {
            fieldName: "Co2",
            label: "CO2"
          },
          {
            fieldName: "So2",
            label: "SO2"
          },
          {
            fieldName: "No2",
            label: "NO2"
          },
          {
            fieldName: "No",
            label: "NO"
          },
          {
            fieldName: "Nox",
            label: "NOx"
          },
          {
            fieldName: "O3",
            label: "O3"
          },
          {
            fieldName: "Rainfall",
            label: "雨量"
          },
          {
            fieldName: "Wind_Speed",
            label: "風速"
          },
          {
            fieldName: "Wind_Direction",
            label: "風向"
          },
          {
            fieldName: "Wind_Speed_HR",
            label: "瞬時風速"
          },
          {
            fieldName: "Temperature",
            label: "溫度"
          },
          {
            fieldName: "Humidity",
            label: "相對濕度"
          }
        ]
      }]
    })
    //移動點圖徵分類
    this.mobileRenderer = new ClassBreaksRenderer({
      field: "Pm2_5_AVG",
      classBreakInfos: [
        {
          minValue: 0,
          maxValue: 3.1,
          symbol: new SimpleMarkerSymbol({
            color: [74, 248, 73],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 3.1,
          maxValue: 6.2,
          symbol: new SimpleMarkerSymbol({
            color: [106, 242, 83],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 6.2,
          maxValue: 9.3,
          symbol: new SimpleMarkerSymbol({
            color: [138, 247, 79],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 9.3,
          maxValue: 12.4,
          symbol: new SimpleMarkerSymbol({
            color: [172, 245, 79],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 12.4,
          maxValue: 15.5,
          symbol: new SimpleMarkerSymbol({
            color: [211, 249, 80],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 15.5,
          maxValue: 19.5,
          symbol: new SimpleMarkerSymbol({
            color: [250, 238, 77],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 19.5,
          maxValue: 23.5,
          symbol: new SimpleMarkerSymbol({
            color: [241, 224, 77],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 23.5,
          maxValue: 27.5,
          symbol: new SimpleMarkerSymbol({
            color: [251, 204, 68],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 27.5,
          maxValue: 31.5,
          symbol: new SimpleMarkerSymbol({
            color: [249, 163, 57],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 31.5,
          maxValue: 35.5,
          symbol: new SimpleMarkerSymbol({
            color: [245, 131, 46],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 35.5,
          maxValue: 39.3,
          symbol: new SimpleMarkerSymbol({
            color: [244, 125, 48],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 39.3,
          maxValue: 43.5,
          symbol: new SimpleMarkerSymbol({
            color: [247, 89, 36],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 43.5,
          maxValue: 47.5,
          symbol: new SimpleMarkerSymbol({
            color: [251, 70, 32],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 47.5,
          maxValue: 51.5,
          symbol: new SimpleMarkerSymbol({
            color: [244, 48, 31],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 51.5,
          maxValue: 54.5,
          symbol: new SimpleMarkerSymbol({
            color: [242, 34, 35],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 54.5,
          maxValue: 73.7,
          symbol: new SimpleMarkerSymbol({
            color: [238, 11, 42],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 73.7,
          maxValue: 92.9,
          symbol: new SimpleMarkerSymbol({
            color: [213, 17, 54],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 92.9,
          maxValue: 112.1,
          symbol: new SimpleMarkerSymbol({
            color: [199, 19, 61],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 112.1,
          maxValue: 131.3,
          symbol: new SimpleMarkerSymbol({
            color: [201, 19, 60],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 131.3,
          maxValue: 150.5,
          symbol: new SimpleMarkerSymbol({
            color: [167, 24, 81],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 150.5,
          maxValue: 170.5,
          symbol: new SimpleMarkerSymbol({
            color: [129, 20, 107],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 170.5,
          maxValue: 190.5,
          symbol: new SimpleMarkerSymbol({
            color: [122, 19, 92],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 190.5,
          maxValue: 210.5,
          symbol: new SimpleMarkerSymbol({
            color: [117, 36, 97],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 210.5,
          maxValue: 230.5,
          symbol: new SimpleMarkerSymbol({
            color: [126, 44, 66],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 230.5,
          maxValue: 250.5,
          symbol: new SimpleMarkerSymbol({
            color: [114, 39, 60],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 250.5,
          maxValue: 300.5,
          symbol: new SimpleMarkerSymbol({
            color: [93, 49, 28],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 300.5,
          maxValue: 350.5,
          symbol: new SimpleMarkerSymbol({
            color: [89, 53, 40],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 350.5,
          maxValue: 400.5,
          symbol: new SimpleMarkerSymbol({
            color: [79, 45, 25],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 400.5,
          maxValue: 450.5,
          symbol: new SimpleMarkerSymbol({
            color: [65, 42, 23],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 450.5,
          maxValue: 500.4,
          symbol: new SimpleMarkerSymbol({
            color: [34, 30, 20],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 500.4,
          maxValue: 9999,
          symbol: new SimpleMarkerSymbol({
            color: [0, 0, 0],
            size: "8px", outline: { color: [255, 255, 255], width: 1 }
          })
        }
      ]
    })
    //固定點圖徵分類
    this.fixedRenderer = new ClassBreaksRenderer({
      field: "Pm2_5",
      classBreakInfos: [
        {
          minValue: 0,
          maxValue: 3.1,
          symbol: new SimpleMarkerSymbol({
            color: [74, 248, 73],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 3.1,
          maxValue: 6.2,
          symbol: new SimpleMarkerSymbol({
            color: [106, 242, 83],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 6.2,
          maxValue: 9.3,
          symbol: new SimpleMarkerSymbol({
            color: [138, 247, 79],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 9.3,
          maxValue: 12.4,
          symbol: new SimpleMarkerSymbol({
            color: [172, 245, 79],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 12.4,
          maxValue: 15.5,
          symbol: new SimpleMarkerSymbol({
            color: [211, 249, 80],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 15.5,
          maxValue: 19.5,
          symbol: new SimpleMarkerSymbol({
            color: [250, 238, 77],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 19.5,
          maxValue: 23.5,
          symbol: new SimpleMarkerSymbol({
            color: [241, 224, 77],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 23.5,
          maxValue: 27.5,
          symbol: new SimpleMarkerSymbol({
            color: [251, 204, 68],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 27.5,
          maxValue: 31.5,
          symbol: new SimpleMarkerSymbol({
            color: [249, 163, 57],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 31.5,
          maxValue: 35.5,
          symbol: new SimpleMarkerSymbol({
            color: [245, 131, 46],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 35.5,
          maxValue: 39.3,
          symbol: new SimpleMarkerSymbol({
            color: [244, 125, 48],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 39.3,
          maxValue: 43.5,
          symbol: new SimpleMarkerSymbol({
            color: [247, 89, 36],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 43.5,
          maxValue: 47.5,
          symbol: new SimpleMarkerSymbol({
            color: [251, 70, 32],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 47.5,
          maxValue: 51.5,
          symbol: new SimpleMarkerSymbol({
            color: [244, 48, 31],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 51.5,
          maxValue: 54.5,
          symbol: new SimpleMarkerSymbol({
            color: [242, 34, 35],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 54.5,
          maxValue: 73.7,
          symbol: new SimpleMarkerSymbol({
            color: [238, 11, 42],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 73.7,
          maxValue: 92.9,
          symbol: new SimpleMarkerSymbol({
            color: [213, 17, 54],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 92.9,
          maxValue: 112.1,
          symbol: new SimpleMarkerSymbol({
            color: [199, 19, 61],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 112.1,
          maxValue: 131.3,
          symbol: new SimpleMarkerSymbol({
            color: [201, 19, 60],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 131.3,
          maxValue: 150.5,
          symbol: new SimpleMarkerSymbol({
            color: [167, 24, 81],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 150.5,
          maxValue: 170.5,
          symbol: new SimpleMarkerSymbol({
            color: [129, 20, 107],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 170.5,
          maxValue: 190.5,
          symbol: new SimpleMarkerSymbol({
            color: [122, 19, 92],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 190.5,
          maxValue: 210.5,
          symbol: new SimpleMarkerSymbol({
            color: [117, 36, 97],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 210.5,
          maxValue: 230.5,
          symbol: new SimpleMarkerSymbol({
            color: [126, 44, 66],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 230.5,
          maxValue: 250.5,
          symbol: new SimpleMarkerSymbol({
            color: [114, 39, 60],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 250.5,
          maxValue: 300.5,
          symbol: new SimpleMarkerSymbol({
            color: [93, 49, 28],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 300.5,
          maxValue: 350.5,
          symbol: new SimpleMarkerSymbol({
            color: [89, 53, 40],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 350.5,
          maxValue: 400.5,
          symbol: new SimpleMarkerSymbol({
            color: [79, 45, 25],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 400.5,
          maxValue: 450.5,
          symbol: new SimpleMarkerSymbol({
            color: [65, 42, 23],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 450.5,
          maxValue: 500.4,
          symbol: new SimpleMarkerSymbol({
            color: [34, 30, 20],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 500.4,
          maxValue: 9999,
          symbol: new SimpleMarkerSymbol({
            color: [0, 0, 0],
            size: "8px", style: "triangle", outline: { color: [255, 255, 255], width: 1 }
          })
        }
      ]
    })
    //國家級圖徵分類
    this.standardRenderer = new ClassBreaksRenderer({
      field: "Pm2_5",
      classBreakInfos: [
        {
          minValue: 0,
          maxValue: 3.1,
          symbol: new SimpleMarkerSymbol({
            color: [74, 248, 73],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 3.1,
          maxValue: 6.2,
          symbol: new SimpleMarkerSymbol({
            color: [106, 242, 83],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 6.2,
          maxValue: 9.3,
          symbol: new SimpleMarkerSymbol({
            color: [138, 247, 79],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 9.3,
          maxValue: 12.4,
          symbol: new SimpleMarkerSymbol({
            color: [172, 245, 79],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 12.4,
          maxValue: 15.5,
          symbol: new SimpleMarkerSymbol({
            color: [211, 249, 80],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 15.5,
          maxValue: 19.5,
          symbol: new SimpleMarkerSymbol({
            color: [250, 238, 77],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 19.5,
          maxValue: 23.5,
          symbol: new SimpleMarkerSymbol({
            color: [241, 224, 77],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 23.5,
          maxValue: 27.5,
          symbol: new SimpleMarkerSymbol({
            color: [251, 204, 68],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 27.5,
          maxValue: 31.5,
          symbol: new SimpleMarkerSymbol({
            color: [249, 163, 57],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 31.5,
          maxValue: 35.5,
          symbol: new SimpleMarkerSymbol({
            color: [245, 131, 46],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 35.5,
          maxValue: 39.3,
          symbol: new SimpleMarkerSymbol({
            color: [244, 125, 48],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 39.3,
          maxValue: 43.5,
          symbol: new SimpleMarkerSymbol({
            color: [247, 89, 36],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 43.5,
          maxValue: 47.5,
          symbol: new SimpleMarkerSymbol({
            color: [251, 70, 32],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 47.5,
          maxValue: 51.5,
          symbol: new SimpleMarkerSymbol({
            color: [244, 48, 31],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 51.5,
          maxValue: 54.5,
          symbol: new SimpleMarkerSymbol({
            color: [242, 34, 35],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 54.5,
          maxValue: 73.7,
          symbol: new SimpleMarkerSymbol({
            color: [238, 11, 42],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 73.7,
          maxValue: 92.9,
          symbol: new SimpleMarkerSymbol({
            color: [213, 17, 54],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 92.9,
          maxValue: 112.1,
          symbol: new SimpleMarkerSymbol({
            color: [199, 19, 61],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 112.1,
          maxValue: 131.3,
          symbol: new SimpleMarkerSymbol({
            color: [201, 19, 60],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 131.3,
          maxValue: 150.5,
          symbol: new SimpleMarkerSymbol({
            color: [167, 24, 81],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 150.5,
          maxValue: 170.5,
          symbol: new SimpleMarkerSymbol({
            color: [129, 20, 107],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 170.5,
          maxValue: 190.5,
          symbol: new SimpleMarkerSymbol({
            color: [122, 19, 92],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 190.5,
          maxValue: 210.5,
          symbol: new SimpleMarkerSymbol({
            color: [117, 36, 97],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 210.5,
          maxValue: 230.5,
          symbol: new SimpleMarkerSymbol({
            color: [126, 44, 66],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 230.5,
          maxValue: 250.5,
          symbol: new SimpleMarkerSymbol({
            color: [114, 39, 60],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 250.5,
          maxValue: 300.5,
          symbol: new SimpleMarkerSymbol({
            color: [93, 49, 28],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 300.5,
          maxValue: 350.5,
          symbol: new SimpleMarkerSymbol({
            color: [89, 53, 40],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 350.5,
          maxValue: 400.5,
          symbol: new SimpleMarkerSymbol({
            color: [79, 45, 25],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 400.5,
          maxValue: 450.5,
          symbol: new SimpleMarkerSymbol({
            color: [65, 42, 23],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 450.5,
          maxValue: 500.4,
          symbol: new SimpleMarkerSymbol({
            color: [34, 30, 20],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        },
        {
          minValue: 500.4,
          maxValue: 9999,
          symbol: new SimpleMarkerSymbol({
            color: [0, 0, 0],
            size: "8px", style: "square", outline: { color: [255, 255, 255], width: 1 }
          })
        }
      ]
    })
  }
}
