import type {
  AnnotationInterface,
  ConsumerType,
  NewableType,
  PackInterface,
  ProviderType,
} from '@zeeero/tokens';

import { PackAnnotation } from '@zeeero/tokens';

export class ModuleAnnotation extends PackAnnotation implements AnnotationInterface {
  override readonly name: string = 'Pack';

  constructor(
    public override options: {
      packs?: Array<NewableType<new (...args: any[]) => PackInterface>>;
      consumers?: Array<ConsumerType | NewableType<any>>;
      providers?: Array<ProviderType | NewableType<any>>;
      network?: { status: Record<string, number> };
    } = {},
  ) {
    super(options);
  }
}

export default ModuleAnnotation;
