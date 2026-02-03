import { DecorationFunctionType, Decorator } from '@zeeero/tokens';

import DeleteAnnotation from '~/controller/annotations/delete.annotation.ts';

export const Delete: DecorationFunctionType<typeof DeleteAnnotation> = Decorator.create(DeleteAnnotation);

export default Delete;
