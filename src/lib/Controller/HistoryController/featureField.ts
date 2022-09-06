/* eslint-disable */

import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'

const outlineR = 255, outlineG = 255, outlineB = 255
const alpha = 0.7
const outlineWidth = 1
const size = '10px'
export const mobileStyle = 'circle'
export const fixedStyle = 'triangle'
export const standardStyle = 'square'

export const mobileHistoryFields: __esri.FieldProperties[] = [
    {
        name: "OBJECTID",
        alias: "OBJECTID",
        type: "oid"
    },
    {
        name: "device_Name",
        alias: "device_Name",
        type: "string"
    },
    {
        name: "datetime",
        alias: "datetime",
        type: "date"
    },
    {
        name: "flow",
        alias: "flow",
        type: "single"
    },
    {
        name: "pm2_5_UART",
        alias: "pm2_5_UART",
        type: "single"
    },
    {
        name: "pm2_5_I2C",
        alias: "pm2_5_I2C",
        type: "single"
    },
    {
        name: "pm2_5_AVG",
        alias: "pm2_5_AVG",
        type: "single"
    },
    {
        name: "voc",
        alias: "voc",
        type: "single"
    },
    {
        name: "temperature",
        alias: "temperature",
        type: "single"
    },
    {
        name: "humidity",
        alias: "humidity",
        type: "single"
    },
    {
        name: "speed",
        alias: "speed",
        type: "single"
    }]

export const mobileTemplateContent = {
    title: "移動式感測器觀測資訊",
    content: [{
        type: "fields",
        fieldInfos: [
            {
                fieldName: "device_Name",
                label: "感測器編號"
            },
            {
                fieldName: "datetime",
                label: "時間",
                format: {
                    dateFormat: "short-date-short-time"
                }
            },
            {
                fieldName: "flow",
                label: "流量"
            },
            {
                fieldName: "pm2_5_UART",
                label: "PM 2.5 (UART)"
            },
            {
                fieldName: "pm2_5_I2C",
                label: "PM 2.5 (I2C)"
            },
            {
                fieldName: "pm2_5_AVG",
                label: "PM 2.5 (平均)"
            },
            {
                fieldName: "voc",
                label: "VOC"
            },
            {
                fieldName: "temperature",
                label: "溫度"
            },
            {
                fieldName: "humidity",
                label: "濕度"
            },
            {
                fieldName: "speed",
                label: "車速"
            }
        ]
    }]
}

export const mobileRendererContent = {
    field: "pm2_5_UART",
    classBreakInfos: [
        {
            minValue: 0,
            maxValue: 3.1,
            symbol: new SimpleMarkerSymbol({
                color: [74, 248, 73, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 3.1,
            maxValue: 6.2,
            symbol: new SimpleMarkerSymbol({
                color: [106, 242, 83, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 6.2,
            maxValue: 9.3,
            symbol: new SimpleMarkerSymbol({
                color: [138, 247, 79, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 9.3,
            maxValue: 12.4,
            symbol: new SimpleMarkerSymbol({
                color: [172, 245, 79, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 12.4,
            maxValue: 15.5,
            symbol: new SimpleMarkerSymbol({
                color: [211, 249, 80, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 15.5,
            maxValue: 19.5,
            symbol: new SimpleMarkerSymbol({
                color: [250, 238, 77, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 19.5,
            maxValue: 23.5,
            symbol: new SimpleMarkerSymbol({
                color: [241, 224, 77, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 23.5,
            maxValue: 27.5,
            symbol: new SimpleMarkerSymbol({
                color: [251, 204, 68, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 27.5,
            maxValue: 31.5,
            symbol: new SimpleMarkerSymbol({
                color: [249, 163, 57, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 31.5,
            maxValue: 35.5,
            symbol: new SimpleMarkerSymbol({
                color: [245, 131, 46, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 35.5,
            maxValue: 39.3,
            symbol: new SimpleMarkerSymbol({
                color: [244, 125, 48, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 39.3,
            maxValue: 43.5,
            symbol: new SimpleMarkerSymbol({
                color: [247, 89, 36, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 43.5,
            maxValue: 47.5,
            symbol: new SimpleMarkerSymbol({
                color: [251, 70, 32, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 47.5,
            maxValue: 51.5,
            symbol: new SimpleMarkerSymbol({
                color: [244, 48, 31, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 51.5,
            maxValue: 54.5,
            symbol: new SimpleMarkerSymbol({
                color: [242, 34, 35, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 54.5,
            maxValue: 73.7,
            symbol: new SimpleMarkerSymbol({
                color: [238, 11, 42, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 73.7,
            maxValue: 92.9,
            symbol: new SimpleMarkerSymbol({
                color: [213, 17, 54, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 92.9,
            maxValue: 112.1,
            symbol: new SimpleMarkerSymbol({
                color: [199, 19, 61, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 112.1,
            maxValue: 131.3,
            symbol: new SimpleMarkerSymbol({
                color: [201, 19, 60, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 131.3,
            maxValue: 150.5,
            symbol: new SimpleMarkerSymbol({
                color: [167, 24, 81, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 150.5,
            maxValue: 170.5,
            symbol: new SimpleMarkerSymbol({
                color: [129, 20, 107, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 170.5,
            maxValue: 190.5,
            symbol: new SimpleMarkerSymbol({
                color: [122, 19, 92, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 190.5,
            maxValue: 210.5,
            symbol: new SimpleMarkerSymbol({
                color: [117, 36, 97, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 210.5,
            maxValue: 230.5,
            symbol: new SimpleMarkerSymbol({
                color: [126, 44, 66, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 230.5,
            maxValue: 250.5,
            symbol: new SimpleMarkerSymbol({
                color: [114, 39, 60, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 250.5,
            maxValue: 300.5,
            symbol: new SimpleMarkerSymbol({
                color: [93, 49, 28, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 300.5,
            maxValue: 350.5,
            symbol: new SimpleMarkerSymbol({
                color: [89, 53, 40, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 350.5,
            maxValue: 400.5,
            symbol: new SimpleMarkerSymbol({
                color: [79, 45, 25, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 400.5,
            maxValue: 450.5,
            symbol: new SimpleMarkerSymbol({
                color: [65, 42, 23, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 450.5,
            maxValue: 500.4,
            symbol: new SimpleMarkerSymbol({
                color: [34, 30, 20, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        },
        {
            minValue: 500.4,
            maxValue: 9999,
            symbol: new SimpleMarkerSymbol({
                color: [0, 0, 0, alpha],
                size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
            })
        }
    ]
}