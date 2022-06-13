/* eslint-disable */
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol'

const size = '3px'
const myfield = 'Pm2_5_UART'

export const routeRendererContent = {
    field: myfield,
    classBreakInfos: [
        {
            minValue: 0,
            maxValue: 3.1,
            symbol: new SimpleLineSymbol({
                color: [74, 248, 73],
                width: size  // pixels
            })
        },
        {
            minValue: 3.1,
            maxValue: 6.2,
            symbol: new SimpleLineSymbol({
                color: [106, 242, 83],
                width: size  // pixels
            })
        },
        {
            minValue: 6.2,
            maxValue: 9.3,
            symbol: new SimpleLineSymbol({
                color: [138, 247, 79],
                width: size  // pixels
            })
        },
        {
            minValue: 9.3,
            maxValue: 12.4,
            symbol: new SimpleLineSymbol({
                color: [172, 245, 79],
                width: size  // pixels
            })
        },
        {
            minValue: 12.4,
            maxValue: 15.5,
            symbol: new SimpleLineSymbol({
                color: [211, 249, 80],
                width: size  // pixels
            })
        },
        {
            minValue: 15.5,
            maxValue: 19.5,
            symbol: new SimpleLineSymbol({
                color: [250, 238, 77],
                width: size  // pixels
            })
        },
        {
            minValue: 19.5,
            maxValue: 23.5,
            symbol: new SimpleLineSymbol({
                color: [241, 224, 77],
                width: size  // pixels
            })
        },
        {
            minValue: 23.5,
            maxValue: 27.5,
            symbol: new SimpleLineSymbol({
                color: [251, 204, 68],
                width: size  // pixels
            })
        },
        {
            minValue: 27.5,
            maxValue: 31.5,
            symbol: new SimpleLineSymbol({
                color: [249, 163, 57],
                width: size  // pixels
            })
        },
        {
            minValue: 31.5,
            maxValue: 35.5,
            symbol: new SimpleLineSymbol({
                color: [245, 131, 46],
                width: size  // pixels
            })
        },
        {
            minValue: 35.5,
            maxValue: 39.3,
            symbol: new SimpleLineSymbol({
                color: [244, 125, 48],
                width: size  // pixels
            })
        },
        {
            minValue: 39.3,
            maxValue: 43.5,
            symbol: new SimpleLineSymbol({
                color: [247, 89, 36],
                width: size  // pixels
            })
        },
        {
            minValue: 43.5,
            maxValue: 47.5,
            symbol: new SimpleLineSymbol({
                color: [251, 70, 32],
                width: size  // pixels
            })
        },
        {
            minValue: 47.5,
            maxValue: 51.5,
            symbol: new SimpleLineSymbol({
                color: [244, 48, 31],
                width: size  // pixels
            })
        },
        {
            minValue: 51.5,
            maxValue: 54.5,
            symbol: new SimpleLineSymbol({
                color: [242, 34, 35],
                width: size  // pixels
            })
        },
        {
            minValue: 54.5,
            maxValue: 73.7,
            symbol: new SimpleLineSymbol({
                color: [238, 11, 42],
                width: size  // pixels
            })
        },
        {
            minValue: 73.7,
            maxValue: 92.9,
            symbol: new SimpleLineSymbol({
                color: [213, 17, 54],
                width: size  // pixels
            })
        },
        {
            minValue: 92.9,
            maxValue: 112.1,
            symbol: new SimpleLineSymbol({
                color: [199, 19, 61],
                width: size  // pixels
            })
        },
        {
            minValue: 112.1,
            maxValue: 131.3,
            symbol: new SimpleLineSymbol({
                color: [201, 19, 60],
                width: size  // pixels
            })
        },
        {
            minValue: 131.3,
            maxValue: 150.5,
            symbol: new SimpleLineSymbol({
                color: [167, 24, 81],
                width: size  // pixels
            })
        },
        {
            minValue: 150.5,
            maxValue: 170.5,
            symbol: new SimpleLineSymbol({
                color: [129, 20, 107],
                width: size  // pixels
            })
        },
        {
            minValue: 170.5,
            maxValue: 190.5,
            symbol: new SimpleLineSymbol({
                color: [122, 19, 92],
                width: size  // pixels
            })
        },
        {
            minValue: 190.5,
            maxValue: 210.5,
            symbol: new SimpleLineSymbol({
                color: [117, 36, 97],
                width: size  // pixels
            })
        },
        {
            minValue: 210.5,
            maxValue: 230.5,
            symbol: new SimpleLineSymbol({
                color: [126, 44, 66],
                width: size  // pixels
            })
        },
        {
            minValue: 230.5,
            maxValue: 250.5,
            symbol: new SimpleLineSymbol({
                color: [114, 139, 60],
                width: size  // pixels
            })
        },
        {
            minValue: 250.5,
            maxValue: 300.5,
            symbol: new SimpleLineSymbol({
                color: [93, 49, 28],
                width: size  // pixels
            })
        },
        {
            minValue: 300.5,
            maxValue: 350.5,
            symbol: new SimpleLineSymbol({
                color: [89, 53, 40],
                width: size  // pixels
            })
        },
        {
            minValue: 350.5,
            maxValue: 400.5,
            symbol: new SimpleLineSymbol({
                color: [79, 45, 25],
                width: size  // pixels
            })
        },
        {
            minValue: 400.5,
            maxValue: 450.5,
            symbol: new SimpleLineSymbol({
                color: [65, 42, 23],
                width: size  // pixels
            })
        },
        {
            minValue: 450.5,
            maxValue: 500.4,
            symbol: new SimpleLineSymbol({
                color: [34, 30, 20],
                width: size  // pixels
            })
        },
        {
            minValue: 500.4,
            maxValue: 9999,
            symbol: new SimpleLineSymbol({
                color: [0, 0, 0],
                width: size  // pixels
            })
        }
    ],
}
