import { DecorationFunctionType, Decorator } from '@zeeero/tokens';

import OptionsAnnotation from '~/controller/annotations/options.annotation.ts';

export const Options: DecorationFunctionType<typeof OptionsAnnotation> = Decorator.create(OptionsAnnotation);

export default Options;
