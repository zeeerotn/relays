import { DecorationFunctionType, Decorator } from '@zeeero/tokens';

import OneAnnotation from '~/persister/annotations/one.annotation.ts';

export const One: DecorationFunctionType<typeof OneAnnotation> = Decorator.create(OneAnnotation);

export default One;
