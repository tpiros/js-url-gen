import {ISourceModel} from "./ISourceModel.js";
import {ITransformationModel} from "./ITransformationModel.js";

export interface IVideoSourceModel extends ISourceModel {
  qualifierType: "VideoSource";
  sourceType: "video";
  publicId: string;
  transformation?: ITransformationModel;
}
