import { DecorationFunctionType, Decorator } from '@zeeero/tokens';

import IndexAnnotation from '~/persister/annotations/index.annotation.ts';

export const Index: DecorationFunctionType<typeof IndexAnnotation> = Decorator.create(IndexAnnotation);

export default Index;
