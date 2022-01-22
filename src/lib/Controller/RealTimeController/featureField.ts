/* eslint-disable */
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'

export const mobileFeatureFields = [
  {
    name: "OBJECTID",
    alias: "OBJECTID",
    type: "oid"
  },
  {
    name: "Device_Name",
    alias: "Device_Name",
    type: "string"
  },
  {
    name: "Datetime",
    alias: "Datetime",
    type: "date"
  },
  {
    name: "Flow",
    alias: "Flow",
    type: "single"
  },
  {
    name: "Pm2_5_UART",
    alias: "Pm2_5_UART",
    type: "single"
  },
  {
    name: "Pm2_5_I2C",
    alias: "Pm2_5_I2C",
    type: "single"
  },
  {
    name: "Pm2_5_AVG",
    alias: "Pm2_5_AVG",
    type: "single"
  },
  {
    name: "Voc",
    alias: "Voc",
    type: "single"
  },
  {
    name: "Temperature",
    alias: "Temperature",
    type: "single"
  },
  {
    name: "Humidity",
    alias: "Humidity",
    type: "single"
  },
  {
    name: "Speed",
    alias: "Speed",
    type: "single"
  }
]

export const standardFeatureFields = [
  {
    name: "OBJECTID",
    alias: "OBJECTID",
    type: "oid"
  },
  {
    name: "Station_Name_",
    alias: "Station_Name_",
    type: "string"
  },
  {
    name: "Createtime",
    alias: "Createtime",
    type: "date"
  },
  {
    name: "Datetime",
    alias: "Datetime",
    type: "date"
  },
  {
    name: "Pm2_5",
    alias: "Pm2_5",
    type: "double"
  },
  {
    name: "Pm10",
    alias: "Pm10",
    type: "double"
  },
  {
    name: "Co",
    alias: "Co",
    type: "double"
  },
  {
    name: "Co2",
    alias: "Co2",
    type: "double"
  },
  {
    name: "So2",
    alias: "So2",
    type: "double"
  },
  {
    name: "No2",
    alias: "No2",
    type: "double"
  },
  {
    name: "No",
    alias: "No",
    type: "double"
  },
  {
    name: "Nox",
    alias: "Nox",
    type: "double"
  },
  {
    name: "O3",
    alias: "O3",
    type: "double"
  },
  {
    name: "Temperature",
    alias: "Temperature",
    type: "double"
  },
  {
    name: "Humidity",
    alias: "Humidity",
    type: "double"
  },
  {
    name: "Rainfall",
    alias: "Rainfall",
    type: "double"
  },
  {
    name: "Wind_Speed",
    alias: "Wind_Speed",
    type: "double"
  },
  {
    name: "Wind_Direction",
    alias: "Wind_Direction",
    type: "double"
  },
  {
    name: "Wind_Speed_HR",
    alias: "Wind_Speed_HR",
    type: "double"
  }
]

export const fixedFeatureFields = [
  {
    name: "OBJECTID",
    alias: "OBJECTID",
    type: "oid"
  },
  {
    name: "Device_Name",
    alias: "Device_Name",
    type: "string"
  },
  {
    name: "Createtime",
    alias: "Createtime",
    type: "date"
  },
  {
    name: "Datetime",
    alias: "Datetime",
    type: "date"
  },
  {
    name: "Pm2_5",
    alias: "Pm2_5",
    type: "double"
  },
  {
    name: "Co",
    alias: "Co",
    type: "double"
  },
  {
    name: "Voc",
    alias: "Voc",
    type: "double"
  },
  {
    name: "So2",
    alias: "So2",
    type: "double"
  },
  {
    name: "No2",
    alias: "No2",
    type: "double"
  },
  {
    name: "Temperature",
    alias: "Temperature",
    type: "double"
  },
  {
    name: "Humidity",
    alias: "Humidity",
    type: "double"
  }
]

const outlineR = 0, outlineG = 0, outlineB = 0
const outlineWidth = 1
const size = '10px'
export const mobileStyle = 'circle'
export const fixedStyle = 'triangle'
export const standardStyle = 'square'


export const changeSymbolDefinition = (avg: any, std: any) => {
  return [
    {
      minValue: 0,
      maxValue: avg,
      symbol: new SimpleMarkerSymbol({
        color: [74, 248, 73],
        size: size, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: avg,
      maxValue: Math.round(avg + (1 / 8) * std),
      symbol: new SimpleMarkerSymbol({
        color: [172, 245, 79],
        size: size, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: Math.round(avg + (1 / 8) * std),
      maxValue: Math.round(avg + (2 / 8) * std),
      symbol: new SimpleMarkerSymbol({
        color: [241, 224, 77],
        size: size, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: Math.round(avg + (2 / 8) * std),
      maxValue: Math.round(avg + (3 / 8) * std),
      symbol: new SimpleMarkerSymbol({
        color: [245, 131, 46],
        size: size, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: Math.round(avg + (3 / 8) * std),
      maxValue: Math.round(avg + (4 / 8) * std),
      symbol: new SimpleMarkerSymbol({
        color: [251, 70, 32],
        size: size, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: Math.round(avg + (4 / 8) * std),
      maxValue: Math.round(avg + (5 / 8) * std),
      symbol: new SimpleMarkerSymbol({
        color: [238, 11, 42],
        size: size, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: Math.round(avg + (5 / 8) * std),
      maxValue: Math.round(avg + (6 / 8) * std),
      symbol: new SimpleMarkerSymbol({
        color: [201, 19, 60],
        size: size, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: Math.round(avg + (7 / 8) * std),
      maxValue: Math.round(avg + std),
      symbol: new SimpleMarkerSymbol({
        color: [122, 19, 92],
        size: size, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: Math.round(avg + std),
      maxValue: 9999,
      symbol: new SimpleMarkerSymbol({
        color: [0, 0, 0],
        size: size, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    }
  ]
}

