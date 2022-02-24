/* eslint-disable */
import BaseController from '../Controller/BaseController'

export default class ControllerManager {
  public controllerSet: { [name: string]: BaseController }

  constructor() {
    this.controllerSet = {}
  }

  public register = (name: string, controller: BaseController) => {
    this.controllerSet[name] = controller
  }

  public activate = (name: string) => {
    for (const key in this.controllerSet) {
      this.controllerSet[key].stop()
    }
    this.controllerSet[name].start()
  }

  public getController = (name: string) => {
    return this.controllerSet[name]
  }
}
