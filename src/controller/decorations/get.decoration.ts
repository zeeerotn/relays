import { DecorationFunctionType, Decorator } from '@zeeero/tokens';

import GetAnnotation from '~/controller/annotations/get.annotation.ts';

export const Get: DecorationFunctionType<typeof GetAnnotation> = Decorator.create(GetAnnotation);

export default Get;
