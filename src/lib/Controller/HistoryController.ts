/* eslint-disable */

/* ArcGIS API for javascript */
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer'
import PopupTemplate from '@arcgis/core/PopupTemplate'
import ClassBreaksRenderer from '@arcgis/core/renderers/ClassBreaksRenderer'

/* Controllers */
import BaseController, { IBaseControllerParam } from './BaseController'
import { mobileHistoryFields } from './HistoryController/featureField'
import { mobileTemplateContent } from './RealTimeController/templateContent'
import { mobileRendererContent } from './RealTimeController/rendererContent'
import { Extent } from '@arcgis/core/geometry'

export interface HistoryQueryParams {
  startTime: number
  endTime: number
  DeviceList: string | null
}

export interface IRealTimeControllerParam {
  mapSet: IBaseControllerParam
}

export default class RealTimeController extends BaseController {
  mobileLayer: GeoJSONLayer | undefined
  workingStatus: boolean

  constructor(options: IRealTimeControllerParam) {
    super({
      map: options.mapSet.map,
      mapView: options.mapSet.mapView
    })
    this.workingStatus = false
  }

  public start = (params: HistoryQueryParams) => {
    if (this.workingStatus === false) {
      // this.getHistory(params)
    }
    this.workingStatus = true
  }

  public stop = () => {
    if (this.workingStatus === true) {
      this._clearMap()
    }
    this.workingStatus = false
  }

  // public getHistory = async (params: HistoryQueryParams) => {
  //   const value = await this.fetchLayerData(params)
  //   this.mobileLayer = new GeoJSONLayer({
  //     title: "移動歷史觀測",
  //     // url: value,
  //     fields: mobileHistoryFields,
  //     timeInfo: {
  //       startField: 'Datetime'
  //     },
  //     popupTemplate: new PopupTemplate(mobileTemplateContent),
  //     renderer: new ClassBreaksRenderer(mobileRendererContent)
  //   })
  // }

  // public fetchLayerData = async (params: HistoryQueryParams) => {
  //   if (params.DeviceList != null) {
  //     return await fetch('/api/MobileSensor/QueryMobileHistory2?DeviceNameList=' + DeviceList + '&StartTime=' + startTime + '&EndTime=' + endTime).then(response => {
  //       if (response.ok) {
  //         return 'Contents/history.json';
  //       }
  //       else {
  //         return '1';
  //       }
  //     });
  //   }
  //   else {
  //     return await fetch('/api/MobileSensor/QueryMobileHistory?xmin=' + extent[0] + '&ymin=' + extent[1] + '&xmax=' + extent[2] + '&ymax=' + extent[3] + '&StartTime=' + startTime + '&EndTime=' + endTime).then(response => {
  //       if (response.ok) {
  //         return 'Contents/history.json';
  //       }
  //       else {
  //         return '1';
  //       }
  //     });
  //   }
  // }
}
