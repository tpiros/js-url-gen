import CutByImage from "./reshape/CutByImage";
import {ImageSource} from "../values/source/sourceTypes/ImageSource";
import {DistortArcAction} from "./reshape/DistortArc";
import {ShearAction} from "./reshape/Shear";
import {DistortAction, IDistortCoordinates} from "./reshape/Distort";

type IReshape = CutByImage | DistortArcAction;

/**
 * @doc
 * @memberOf Actions
 * @namespace Reshape
 */



/**
 * @description Trims pixels according to the transparency levels of a given overlay image.
 * Wherever the overlay image is transparent, the original is shown, and wherever the overlay is opaque, the resulting image is transparent.
 * @param {Values.Source.ImageSource} imageSource
 * @memberOf Actions.Reshape
 */
function cutByImage(imageSource: ImageSource): CutByImage {
  return new CutByImage(imageSource);
}

/**
 * @description Distorts the image to an arc shape.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/transformation_reference#e_distort | Distorting images}</br>
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#image_shape_changes_and_distortion_effects | Distortion effects}
 *
 * @param {number} degrees The degrees to arc the image
 * @memberOf Actions.Reshape
 */
function distortArc(degrees: number): DistortArcAction {
  return new DistortArcAction(degrees);
}

/**
 * Distorts the image to a new shape by adjusting its corners to achieve perception warping.
 * Specify four corner coordinates, representing the new coordinates for each of the image's four corners,
 * in clockwise order from the top-left corner.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/transformation_reference#e_distort | Distorting images}
 *
 * @param {number[]} coordinates - Four x/y pairs representing the new image corners
 * @memberOf Actions.Reshape
 */
function distort(coordinates: IDistortCoordinates): DistortAction {
  return new DistortAction(coordinates);
}

/**
 * @description Skews the image according to the two specified values in degrees.
 * @memberOf Actions.Reshape
 */
function shear(): ShearAction {
  return new ShearAction();
}

const Reshape = {cutByImage, distortArc, distort, shear};
export {cutByImage, Reshape, IReshape, distortArc, distort, shear};
