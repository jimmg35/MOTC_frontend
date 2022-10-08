
/* eslint-disable */
export const routeTemplateContent = {
    title: "移動式感測器路網",
    content: [{
      type: "fields",
      fieldInfos: [
        {
            fieldName: 'Pm2_5_UART',
            label: 'Pm 2.5 UART'
        },
        {
            fieldName: 'Pm2_5_I2C',
            label: 'Pm 2.5 I2C'
        },
        {
            fieldName: 'Pm_Mean',
            label: 'Pm 2.5 平均'
        },
        {
            fieldName: 'Voc',
            label: 'VOC'
        },
        {
            fieldName: 'CO',
            label: 'CO'
        },
        {
            fieldName: 'Temperature',
            label: '溫度'
        },
        {
            fieldName: 'Humidity',
            label: '濕度'
        },
        {
            fieldName: 'Speed',
            label: '車速'
        },
        {
            fieldName: 'Flow',
            label: '車流'
        }
      
      ]
    }
    ]
}

export const fixedHistoryTemplateContent = {
    title: "固定式感測器歷史觀測資訊",
    content: [{
      type: "fields",
      fieldInfos: [
        {
            fieldName: 'deviceId',
            label: "感測器編號"
        },
        {
            fieldName: 'pm25Value',
            label: "PM 2.5"
        },
        {
            fieldName: 'vocValue',
            label: "VOC"
        },
        {
            fieldName: 'temperature',
            label: "溫度"
        },
        {
            fieldName: 'humidity',
            label: '濕度',
        }]
    }]
}