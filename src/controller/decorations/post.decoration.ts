import { DecorationFunctionType, Decorator } from '@zeeero/tokens';

import PostAnnotation from '~/controller/annotations/post.annotation.ts';

export const Post: DecorationFunctionType<typeof PostAnnotation> = Decorator.create(PostAnnotation);

export default Post;
