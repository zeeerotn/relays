import type { AnnotationInterface, ArtifactType, DecoratorType, KeyableType, NewableType } from '@zeeero/tokens';
import type { RelationOptionsType } from '~/persister/types.ts';
import type { RelationInterface } from '~/persister/interfaces.ts';

import { AnnotationException, DecoratorKindEnum } from '@zeeero/tokens';

export class OneAnnotation implements AnnotationInterface, RelationInterface {
  name: string = 'One';
  persists?: boolean | undefined = true;
  stackable?: boolean | undefined = false;

  constructor(
    public referenceTable: () => NewableType<any>,
    public options: RelationOptionsType & { localKey: KeyableType },
  ) {}

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

export default OneAnnotation;
