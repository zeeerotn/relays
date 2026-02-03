import { DecorationFunctionType, Decorator } from '@zeeero/tokens';

import ControllerAnnotation from '~/controller/annotations/controller.annotation.ts';

export const Controller: DecorationFunctionType<typeof ControllerAnnotation> = Decorator.create(ControllerAnnotation);

export default Controller;
