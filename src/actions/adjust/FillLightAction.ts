import {Action} from "../../internal/Action";
import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @description Adjusts the fill light and blends the result with the original image.
 * @memberOf Actions.Adjust
 * @augments {SDK.Action}
 */
class FillLightAction extends Action {
  private lvl:number;
  private biasLvl:number;
  constructor() {
    super();
  }

  /**
   * @description Sets the level of adjustment
   * @param {number} lvl How much to blend the adjusted fill light, where 0 means only use the original and 100 means only use the adjusted fill light result. (Range: 0 to 100, Server default: 100)
   */
  blend(blend:number): this {
    this.lvl = blend;
    return this;
  }

  /**
   * @description Sets the level of the bias
   * @param {number} biasLvl The bias to apply to the fill light effect (Range: -100 to 100, Server default: 0).
   */
  bias(biasLvl:number): this {
    this.biasLvl = biasLvl;
    return this;
  }

  protected prepareQualifiers(): this {
    const qualifierValue = new QualifierValue(['fill_light', this.lvl, this.biasLvl]).setDelimiter(':');
    this.addQualifier(new Qualifier('e', qualifierValue));
    return this;
  }
}

export {FillLightAction};
