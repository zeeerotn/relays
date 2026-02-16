import type { PackerInterface as PackerTokenInterface } from '@zeeero/tokens';
import type { NetworkType } from '~/packer/types.ts';

export interface PackerInterface extends PackerTokenInterface {
  network?: NetworkType
}

export default {}