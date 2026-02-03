import { DecorationFunctionType, Decorator } from '@zeeero/tokens';

import HeadAnnotation from '~/controller/annotations/head.annotation.ts';

export const Head: DecorationFunctionType<typeof HeadAnnotation> = Decorator.create(HeadAnnotation);

export default Head;
