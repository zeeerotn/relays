import { DecorationFunctionType, Decorator } from '@zeeero/tokens';

import ConnectAnnotation from '~/controller/annotations/connect.annotation.ts';

export const Connect: DecorationFunctionType<typeof ConnectAnnotation> = Decorator.create(ConnectAnnotation);

export default Connect;
