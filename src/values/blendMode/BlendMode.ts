import Action from "../../actions/Action";
import Qualifier from "../../qualifier/Qualifier";
import QualifierValue from "../../qualifier/QualifierValue";


/**
 * @description Defines the mode of blending to use when overlaying an image.
 * @namespace BlendMode
 * @memberOf Values
 */


/**
 * @description
 * Even though Position is technically an actionParam, it implements exactly the same functionality as an action.
 * This is true because Position is actually multiParam
 * @extends Action
 */
class BlendMode extends Action {
  constructor(blendMode:string, level?:number) {
    super();
    this.addQualifier(new Qualifier('e', new QualifierValue([blendMode, level])));
  }
}


/**
 * @memberOf Values.BlendMode
 * @description Add an overlay image blended using the 'multiply' blend mode.
 * @return {BlendMode}
 */
function multiply():BlendMode {
  return new BlendMode('multiply');
}

/**
 * @memberOf Values.BlendMode
 * @description Add an overlay image blended using the 'screen' blend mode.
 * @return {BlendMode}
 */
function screen():BlendMode {
  return new BlendMode('screen');
}

/**
 * @memberOf Values.BlendMode
 * @description Add an overlay image blended using the 'overlay' blend mode.
 * @return {BlendMode}
 */
function overlay():BlendMode {
  return new BlendMode('overlay');
}

export {
  screen,
  multiply,
  overlay,
  BlendMode
};

export default {
  screen,
  multiply,
  overlay,
  BlendMode
};
