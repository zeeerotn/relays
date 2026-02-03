import type { AnnotationInterface, ArtifactType, DecoratorType } from '@zeeero/tokens';
import type { IndexOptionsType } from '~/persister/types.ts';
import type { IndexInterface } from '~/persister/interfaces.ts';

import { AnnotationException, DecoratorKindEnum } from '@zeeero/tokens';

export class IndexAnnotation implements AnnotationInterface, IndexInterface {
  name: string = 'Index';
  persists?: boolean | undefined = true;
  stackable?: boolean | undefined = false;

  constructor(public indexName?: string | string[], public options?: IndexOptionsType) {}

  onAttach(artifact: ArtifactType, decorator: DecoratorType): any {
    if (
      decorator.decoration.kind == DecoratorKindEnum.FIELD ||
      decorator.decoration.kind == DecoratorKindEnum.ACCESSOR
    ) {
      return artifact.target;
    }

    throw new AnnotationException('Method not implemented for {name} on {kind}.', {
      key: 'NOT_IMPLEMENTED',
      context: { name: artifact.name, kind: decorator.decoration.kind },
    });
  }

  onInitialize(_artifact: ArtifactType, _decorator: DecoratorType) {}
}

export default IndexAnnotation;
