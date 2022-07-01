/* eslint-disable */

import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'

const outlineR = 0, outlineG = 0, outlineB = 0
const outlineWidth = 1
const size = '10px'
export const mobileStyle = 'circle'
export const fixedStyle = 'triangle'
export const standardStyle = 'square'

export const mobileRendererContent = {
  field: "Pm2_5_AVG",
  classBreakInfos: [
    {
      minValue: 0,
      maxValue: 3.1,
      symbol: new SimpleMarkerSymbol({
        color: [74, 248, 73],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 3.1,
      maxValue: 6.2,
      symbol: new SimpleMarkerSymbol({
        color: [106, 242, 83],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 6.2,
      maxValue: 9.3,
      symbol: new SimpleMarkerSymbol({
        color: [138, 247, 79],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 9.3,
      maxValue: 12.4,
      symbol: new SimpleMarkerSymbol({
        color: [172, 245, 79],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 12.4,
      maxValue: 15.5,
      symbol: new SimpleMarkerSymbol({
        color: [211, 249, 80],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 15.5,
      maxValue: 19.5,
      symbol: new SimpleMarkerSymbol({
        color: [250, 238, 77],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 19.5,
      maxValue: 23.5,
      symbol: new SimpleMarkerSymbol({
        color: [241, 224, 77],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 23.5,
      maxValue: 27.5,
      symbol: new SimpleMarkerSymbol({
        color: [251, 204, 68],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 27.5,
      maxValue: 31.5,
      symbol: new SimpleMarkerSymbol({
        color: [249, 163, 57],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 31.5,
      maxValue: 35.5,
      symbol: new SimpleMarkerSymbol({
        color: [245, 131, 46],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 35.5,
      maxValue: 39.3,
      symbol: new SimpleMarkerSymbol({
        color: [244, 125, 48],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 39.3,
      maxValue: 43.5,
      symbol: new SimpleMarkerSymbol({
        color: [247, 89, 36],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 43.5,
      maxValue: 47.5,
      symbol: new SimpleMarkerSymbol({
        color: [251, 70, 32],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 47.5,
      maxValue: 51.5,
      symbol: new SimpleMarkerSymbol({
        color: [244, 48, 31],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 51.5,
      maxValue: 54.5,
      symbol: new SimpleMarkerSymbol({
        color: [242, 34, 35],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 54.5,
      maxValue: 73.7,
      symbol: new SimpleMarkerSymbol({
        color: [238, 11, 42],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 73.7,
      maxValue: 92.9,
      symbol: new SimpleMarkerSymbol({
        color: [213, 17, 54],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 92.9,
      maxValue: 112.1,
      symbol: new SimpleMarkerSymbol({
        color: [199, 19, 61],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 112.1,
      maxValue: 131.3,
      symbol: new SimpleMarkerSymbol({
        color: [201, 19, 60],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 131.3,
      maxValue: 150.5,
      symbol: new SimpleMarkerSymbol({
        color: [167, 24, 81],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 150.5,
      maxValue: 170.5,
      symbol: new SimpleMarkerSymbol({
        color: [129, 20, 107],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 170.5,
      maxValue: 190.5,
      symbol: new SimpleMarkerSymbol({
        color: [122, 19, 92],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 190.5,
      maxValue: 210.5,
      symbol: new SimpleMarkerSymbol({
        color: [117, 36, 97],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 210.5,
      maxValue: 230.5,
      symbol: new SimpleMarkerSymbol({
        color: [126, 44, 66],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 230.5,
      maxValue: 250.5,
      symbol: new SimpleMarkerSymbol({
        color: [114, 39, 60],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 250.5,
      maxValue: 300.5,
      symbol: new SimpleMarkerSymbol({
        color: [93, 49, 28],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 300.5,
      maxValue: 350.5,
      symbol: new SimpleMarkerSymbol({
        color: [89, 53, 40],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 350.5,
      maxValue: 400.5,
      symbol: new SimpleMarkerSymbol({
        color: [79, 45, 25],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 400.5,
      maxValue: 450.5,
      symbol: new SimpleMarkerSymbol({
        color: [65, 42, 23],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 450.5,
      maxValue: 500.4,
      symbol: new SimpleMarkerSymbol({
        color: [34, 30, 20],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 500.4,
      maxValue: 9999,
      symbol: new SimpleMarkerSymbol({
        color: [0, 0, 0],
        size: size, style: mobileStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    }
  ]
}

export const fixedRendererContent = {
  field: "pm25",
  classBreakInfos: [
    {
      minValue: 0,
      maxValue: 3.1,
      symbol: new SimpleMarkerSymbol({
        color: [74, 248, 73],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 3.1,
      maxValue: 6.2,
      symbol: new SimpleMarkerSymbol({
        color: [106, 242, 83],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 6.2,
      maxValue: 9.3,
      symbol: new SimpleMarkerSymbol({
        color: [138, 247, 79],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 9.3,
      maxValue: 12.4,
      symbol: new SimpleMarkerSymbol({
        color: [172, 245, 79],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 12.4,
      maxValue: 15.5,
      symbol: new SimpleMarkerSymbol({
        color: [211, 249, 80],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 15.5,
      maxValue: 19.5,
      symbol: new SimpleMarkerSymbol({
        color: [250, 238, 77],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 19.5,
      maxValue: 23.5,
      symbol: new SimpleMarkerSymbol({
        color: [241, 224, 77],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 23.5,
      maxValue: 27.5,
      symbol: new SimpleMarkerSymbol({
        color: [251, 204, 68],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 27.5,
      maxValue: 31.5,
      symbol: new SimpleMarkerSymbol({
        color: [249, 163, 57],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 31.5,
      maxValue: 35.5,
      symbol: new SimpleMarkerSymbol({
        color: [245, 131, 46],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 35.5,
      maxValue: 39.3,
      symbol: new SimpleMarkerSymbol({
        color: [244, 125, 48],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 39.3,
      maxValue: 43.5,
      symbol: new SimpleMarkerSymbol({
        color: [247, 89, 36],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 43.5,
      maxValue: 47.5,
      symbol: new SimpleMarkerSymbol({
        color: [251, 70, 32],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 47.5,
      maxValue: 51.5,
      symbol: new SimpleMarkerSymbol({
        color: [244, 48, 31],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 51.5,
      maxValue: 54.5,
      symbol: new SimpleMarkerSymbol({
        color: [242, 34, 35],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 54.5,
      maxValue: 73.7,
      symbol: new SimpleMarkerSymbol({
        color: [238, 11, 42],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 73.7,
      maxValue: 92.9,
      symbol: new SimpleMarkerSymbol({
        color: [213, 17, 54],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 92.9,
      maxValue: 112.1,
      symbol: new SimpleMarkerSymbol({
        color: [199, 19, 61],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 112.1,
      maxValue: 131.3,
      symbol: new SimpleMarkerSymbol({
        color: [201, 19, 60],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 131.3,
      maxValue: 150.5,
      symbol: new SimpleMarkerSymbol({
        color: [167, 24, 81],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 150.5,
      maxValue: 170.5,
      symbol: new SimpleMarkerSymbol({
        color: [129, 20, 107],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 170.5,
      maxValue: 190.5,
      symbol: new SimpleMarkerSymbol({
        color: [122, 19, 92],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 190.5,
      maxValue: 210.5,
      symbol: new SimpleMarkerSymbol({
        color: [117, 36, 97],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 210.5,
      maxValue: 230.5,
      symbol: new SimpleMarkerSymbol({
        color: [126, 44, 66],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 230.5,
      maxValue: 250.5,
      symbol: new SimpleMarkerSymbol({
        color: [114, 39, 60],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 250.5,
      maxValue: 300.5,
      symbol: new SimpleMarkerSymbol({
        color: [93, 49, 28],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 300.5,
      maxValue: 350.5,
      symbol: new SimpleMarkerSymbol({
        color: [89, 53, 40],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 350.5,
      maxValue: 400.5,
      symbol: new SimpleMarkerSymbol({
        color: [79, 45, 25],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 400.5,
      maxValue: 450.5,
      symbol: new SimpleMarkerSymbol({
        color: [65, 42, 23],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 450.5,
      maxValue: 500.4,
      symbol: new SimpleMarkerSymbol({
        color: [34, 30, 20],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 500.4,
      maxValue: 9999,
      symbol: new SimpleMarkerSymbol({
        color: [0, 0, 0],
        size: size, style: fixedStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    }
  ]
}

export const standardRendererContent = {
  field: "Pm2_5",
  classBreakInfos: [
    {
      minValue: 0,
      maxValue: 3.1,
      symbol: new SimpleMarkerSymbol({
        color: [74, 248, 73],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 3.1,
      maxValue: 6.2,
      symbol: new SimpleMarkerSymbol({
        color: [106, 242, 83],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 6.2,
      maxValue: 9.3,
      symbol: new SimpleMarkerSymbol({
        color: [138, 247, 79],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 9.3,
      maxValue: 12.4,
      symbol: new SimpleMarkerSymbol({
        color: [172, 245, 79],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 12.4,
      maxValue: 15.5,
      symbol: new SimpleMarkerSymbol({
        color: [211, 249, 80],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 15.5,
      maxValue: 19.5,
      symbol: new SimpleMarkerSymbol({
        color: [250, 238, 77],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 19.5,
      maxValue: 23.5,
      symbol: new SimpleMarkerSymbol({
        color: [241, 224, 77],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 23.5,
      maxValue: 27.5,
      symbol: new SimpleMarkerSymbol({
        color: [251, 204, 68],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 27.5,
      maxValue: 31.5,
      symbol: new SimpleMarkerSymbol({
        color: [249, 163, 57],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 31.5,
      maxValue: 35.5,
      symbol: new SimpleMarkerSymbol({
        color: [245, 131, 46],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 35.5,
      maxValue: 39.3,
      symbol: new SimpleMarkerSymbol({
        color: [244, 125, 48],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 39.3,
      maxValue: 43.5,
      symbol: new SimpleMarkerSymbol({
        color: [247, 89, 36],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 43.5,
      maxValue: 47.5,
      symbol: new SimpleMarkerSymbol({
        color: [251, 70, 32],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 47.5,
      maxValue: 51.5,
      symbol: new SimpleMarkerSymbol({
        color: [244, 48, 31],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 51.5,
      maxValue: 54.5,
      symbol: new SimpleMarkerSymbol({
        color: [242, 34, 35],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 54.5,
      maxValue: 73.7,
      symbol: new SimpleMarkerSymbol({
        color: [238, 11, 42],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 73.7,
      maxValue: 92.9,
      symbol: new SimpleMarkerSymbol({
        color: [213, 17, 54],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 92.9,
      maxValue: 112.1,
      symbol: new SimpleMarkerSymbol({
        color: [199, 19, 61],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 112.1,
      maxValue: 131.3,
      symbol: new SimpleMarkerSymbol({
        color: [201, 19, 60],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 131.3,
      maxValue: 150.5,
      symbol: new SimpleMarkerSymbol({
        color: [167, 24, 81],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 150.5,
      maxValue: 170.5,
      symbol: new SimpleMarkerSymbol({
        color: [129, 20, 107],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 170.5,
      maxValue: 190.5,
      symbol: new SimpleMarkerSymbol({
        color: [122, 19, 92],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 190.5,
      maxValue: 210.5,
      symbol: new SimpleMarkerSymbol({
        color: [117, 36, 97],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 210.5,
      maxValue: 230.5,
      symbol: new SimpleMarkerSymbol({
        color: [126, 44, 66],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 230.5,
      maxValue: 250.5,
      symbol: new SimpleMarkerSymbol({
        color: [114, 39, 60],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 250.5,
      maxValue: 300.5,
      symbol: new SimpleMarkerSymbol({
        color: [93, 49, 28],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 300.5,
      maxValue: 350.5,
      symbol: new SimpleMarkerSymbol({
        color: [89, 53, 40],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 350.5,
      maxValue: 400.5,
      symbol: new SimpleMarkerSymbol({
        color: [79, 45, 25],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 400.5,
      maxValue: 450.5,
      symbol: new SimpleMarkerSymbol({
        color: [65, 42, 23],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 450.5,
      maxValue: 500.4,
      symbol: new SimpleMarkerSymbol({
        color: [34, 30, 20],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    },
    {
      minValue: 500.4,
      maxValue: 9999,
      symbol: new SimpleMarkerSymbol({
        color: [0, 0, 0],
        size: size, style: standardStyle, outline: { color: [outlineR, outlineG, outlineB], width: outlineWidth }
      })
    }
  ]
}
