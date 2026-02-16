import type { ContainerInterface } from '@zeeero/tokens';
import type { PackNewableType } from '@zeeero/tokens';
import type { NetworkType } from '~/modulator/types.ts';
import { Packer, DecoratorMetadata } from '@zeeero/tokens';
import ModuleAnnotation from '~/modulator/annotations/module.annotation.ts';

export class Modulator extends Packer {
  public network: NetworkType = { status: {} };

  constructor(pack: PackNewableType, container: ContainerInterface) {
    super(pack, container);
  }

  public override unpack(pack: PackNewableType = this.pack): void {
    super.unpack(pack);

    const decorator = DecoratorMetadata.findByAnnotationInteroperableName(pack, 'pack', 'construct');

    if (decorator) {
      const annotation = decorator.annotation.target as ModuleAnnotation;

      if (annotation.options.network?.status) {
        this.network.status = { ...this.network.status, ...annotation.options.network.status };
      }
    }
  }
}

export default Modulator;