import ResizeSimpleAction from "./ResizeSimpleAction";
import {GravityQualifier} from "../../../../values/gravity/Gravity";

/**
 * @description Defines an advanced resize.
 * @class ResizeAdvancedAction
 * @augments ResizeSimpleAction
 */
class ResizeAdvancedAction extends ResizeSimpleAction {
  /**
   * @description Which part of the original image to include.
   * @param {Values.Gravity} gravity
   */
  gravity(gravity:GravityQualifier): this {
    return this.addQualifier(gravity);
  }
}


export default ResizeAdvancedAction;
