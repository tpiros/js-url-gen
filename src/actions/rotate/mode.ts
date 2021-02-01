import RotateAction from "./RotateAction";
import {RotationModeQualifierValue} from "../../qualifiers/rotate/RotationModeQualifierValue";

/**
 * @summary action
 * @memberOf Actions.Rotate
 * @description Rotate an image by using a rotationMode
 * @param {string} rotationMode
 * For a list of supported rotation modes see {@link Qualifiers.rotationModeValues| types of rotation modes} for
 * possible values
 * @example
 * transformation.rotate(Rotate.mode(RotationMode.autoLeft());
 * @return {RotateAction}
 */
function mode(rotationMode: RotationModeQualifierValue | string) :RotateAction {
  return new RotateAction().mode(rotationMode);
}

export default mode;
