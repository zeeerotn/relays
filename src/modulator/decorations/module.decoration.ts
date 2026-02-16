import type { DecorationFunctionType } from '@zeeero/tokens';
import { Decorator } from '@zeeero/tokens';

import ModuleAnnotation from '~/modulator/annotations/module.annotation.ts';

export const BackendPack: DecorationFunctionType<typeof ModuleAnnotation> = Decorator.create(ModuleAnnotation);

export default BackendPack;