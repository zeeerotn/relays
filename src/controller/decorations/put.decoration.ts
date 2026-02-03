import { DecorationFunctionType, Decorator } from '@zeeero/tokens';

import PutAnnotation from '~/controller/annotations/put.annotation.ts';

export const Put: DecorationFunctionType<typeof PutAnnotation> = Decorator.create(PutAnnotation);

export default Put;
