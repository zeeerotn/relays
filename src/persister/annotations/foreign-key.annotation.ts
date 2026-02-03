import type { AnnotationInterface, ArtifactType, DecoratorType, NewableType } from '@zeeero/tokens';
import type { ForeignKeyOptionsType } from '~/persister/types.ts';
import type { ForeignKeyInterface } from '~/persister/interfaces.ts';

import { AnnotationException, DecoratorKindEnum } from '@zeeero/tokens';

export class ForeignKeyAnnotation implements AnnotationInterface, ForeignKeyInterface {
  name: string = 'ForeignKey';
  persists?: boolean | undefined = true;
  stackable?: boolean | undefined = true;

  constructor(public referenceTable: string | NewableType<any>, public options: ForeignKeyOptionsType) {}

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

export default ForeignKeyAnnotation;
