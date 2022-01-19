/* eslint space-before-function-paren: ["error", "never"] */
/* eslint-env es6 */

import BaseController, { IBaseControllerParam } from './BaseController'

export interface IRealTimeControllerParam {
  mapSet: IBaseControllerParam
}

export default class RealTimeController extends BaseController {
  constructor(options: IRealTimeControllerParam) {
    super({
      map: options.mapSet.map,
      mapView: options.mapSet.mapView
    })
  }
}
