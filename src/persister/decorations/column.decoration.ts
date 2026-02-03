import { DecorationFunctionType, Decorator } from '@zeeero/tokens';

import ColumnAnnotation from '~/persister/annotations/column.annotation.ts';

export const Column: DecorationFunctionType<typeof ColumnAnnotation> = Decorator.create(ColumnAnnotation);

export default Column;
