import type { ContainerInterface, PackNewableType, RedactorInterface, TracerInterface } from '@zeeero/tokens';
import type { MiddlerInterface, RouterInterface } from '~/controller/interfaces.ts';
import type { ApplicationOptionsType } from '~/entrypoint/types.ts';
import type { PackerInterface } from '~/packer/interfaces.ts';
import type { ServerInterface } from '~/network/interfaces.ts';
import type { ResourcerInterface } from '~/resourcer/interfaces.ts';

export interface RelayInterface {
  boot(...args: any[]): void;
  start(...args: any[]): void;
  stop(...args: any[]): void;
}

export interface ApplicationInterface {
  pack: PackNewableType;
  container: ContainerInterface;
  packer: PackerInterface;
  router: RouterInterface;
  middler: MiddlerInterface;
  servers: Array<ServerInterface>;
  resourcer: ResourcerInterface;
  tracer: TracerInterface;
  redactor: RedactorInterface;
  options: ApplicationOptionsType;
}

export interface PathInterface {
  [key: string]: string | number;
}

export default {};
