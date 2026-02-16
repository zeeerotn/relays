import type { ContainerInterface, PackerInterface } from '@zeeero/tokens';
import type { PackNewableType } from '@zeeero/tokens';
import type { NetworkType } from '~/packer/types.ts';
import { Packer as PackerToken, DecoratorMetadata } from '@zeeero/tokens';
import PackAnnotation from '~/packer/annotations/pack.annotation.ts';

export class Packer extends PackerToken implements PackerInterface {
  public network: NetworkType = { status: {} };

  constructor(pack: PackNewableType, container: ContainerInterface) {
    super(pack, container);
  }

  public override unpack(pack: PackNewableType = this.pack): void {
    super.unpack(pack);

    const decorator = DecoratorMetadata.findByAnnotationInteroperableName(pack, 'pack', 'construct');

    if (decorator) {
      const annotation = decorator.annotation.target as PackAnnotation;

      if (annotation.options.network?.status) {
        this.network.status = { ...this.network.status, ...annotation.options.network.status };
      }
    }
  }
}

export default Packer;