import type { DecorationFunctionType } from '@zeeero/tokens';
import { Decorator } from '@zeeero/tokens';

import PackAnnotation from '~/packer/annotations/pack.annotation.ts';

export const Pack: DecorationFunctionType<typeof PackAnnotation> = Decorator.create(PackAnnotation);

export default Pack;