import IURLConfig from "../config/interfaces/Config/IURLConfig.js";
import {Action} from "../internal/Action.js";
import {CloudinaryTransformable} from "./CloudinaryTransformable.js";
import ICloudConfig from "../config/interfaces/Config/ICloudConfig.js";
import {videoEditType} from "../actions/videoEdit.js";
import {VideoTransformation} from "../transformation/VideoTransformation.js";


/**
 * @desc Cloudinary video asset, with video-related transformations
 * @summary SDK
 * @memberOf SDK
 */
class CloudinaryVideo extends CloudinaryTransformable {
  constructor(publicID?: string, cloudConfig?: ICloudConfig, urlConfig?: IURLConfig) {
    /* istanbul ignore next */
    super(publicID, cloudConfig, urlConfig, new VideoTransformation());
    this.assetType = 'video';
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Transcode} action
   * @return {this}
   */
  transcode(action: Action): this {
    this.transformation.transcode(action);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.VideoEdit} action
   * @return {this}
   */
  videoEdit(action: videoEditType): this {
    this.transformation.videoEdit(action);
    return this;
  }
}


export {CloudinaryVideo};
