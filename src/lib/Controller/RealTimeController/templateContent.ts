/* eslint-disable */

export const mobileTemplateContent = {
  title: "移動式感測器觀測資訊",
  content: [{
    type: "fields",
    fieldInfos: [
      {
        fieldName: 'deviceId',
        label: "感測器編號"
      },
      {
        fieldName: 'pm25uart',
        label: "PM 2.5 UART"
      },
      {
        fieldName: 'voc',
        label: "VOC"
      },
      {
        fieldName: 'updateTime',
        label: "最後更新時間"
      }
      // {
      //   fieldName: "Device_Name",
      //   label: "感測器編號"
      // },
      // {
      //   fieldName: "Datetime",
      //   label: "時間",
      //   format: {
      //     dateFormat: "short-date-short-time"
      //   }
      // },
      // {
      //   fieldName: "Flow",
      //   label: "流量"
      // },
      // {
      //   fieldName: "Pm2_5_UART",
      //   label: "PM 2.5 (UART)"
      // },
      // {
      //   fieldName: "Pm2_5_I2C",
      //   label: "PM 2.5 (I2C)"
      // },
      // {
      //   fieldName: "Pm2_5_AVG",
      //   label: "PM 2.5 (平均)"
      // },
      // {
      //   fieldName: "Voc",
      //   label: "VOC"
      // },
      // {
      //   fieldName: "Temperature",
      //   label: "溫度"
      // },
      // {
      //   fieldName: "Humidity",
      //   label: "濕度"
      // },
      // {
      //   fieldName: "Speed",
      //   label: "車速"
      // }
    ]
  }]
}

export const fixedTemplateContent = {
  title: "固定式感測器觀測資訊",
  content: [{
    type: "fields",
    fieldInfos: [
      {
        fieldName: 'deviceId',
        label: "感測器編號"
      },
      {
        fieldName: 'pm25',
        label: "PM 2.5"
      },
      {
        fieldName: 'voc',
        label: "VOC"
      },
      {
        fieldName: 'updateTime',
        label: "最後更新時間"
      }
      // {
      //   fieldName: "Device_Name",
      //   label: "識別碼"
      // },
      // {
      //   fieldName: "Datetime",
      //   label: "時間",
      //   format: {
      //     dateFormat: "short-date-short-time"
      //   }
      // },
      // {
      //   fieldName: "Pm2_5",
      //   label: "PM 2.5"
      // },
      // {
      //   fieldName: "Co",
      //   label: "CO"
      // },
      // {
      //   fieldName: "Voc",
      //   label: "VOC"
      // },
      // {
      //   fieldName: "So2",
      //   label: "SO2"
      // },
      // {
      //   fieldName: "No2",
      //   label: "NO2"
      // },
      // {
      //   fieldName: "Temperature",
      //   label: "溫度"
      // },
      // {
      //   fieldName: "Humidity",
      //   label: "濕度"
      // }
    ]
  }]
}

export const standardTemplateContent = {
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
}
