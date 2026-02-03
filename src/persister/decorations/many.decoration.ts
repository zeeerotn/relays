import { DecorationFunctionType, Decorator } from '@zeeero/tokens';

import ManyAnnotation from '~/persister/annotations/many.annotation.ts';

export const Many: DecorationFunctionType<typeof ManyAnnotation> = Decorator.create(ManyAnnotation);

export default Many;
