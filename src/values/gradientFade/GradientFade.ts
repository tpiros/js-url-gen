/**
 * @description Defines how the background gradient fade effect is applied.
 * @memberOf Values
 * @namespace GradientFade
 */

/**
 * @description Instructs the gradient fade to be applied symmetrically (to opposite edges of the image).
 * @memberOf Values.GradientFade
 * @return {string}
 */
export function symmetric(): string {
  return 'symmetric';
}

/**
 * @description Instructs the gradient fade to be applied symmetrically (to opposite edges of the image) including background padding.
 * @memberOf Values.GradientFade
 * @return {string}
 */
export function symmetricPad(): string {
  return 'symmetric_pad';
}
