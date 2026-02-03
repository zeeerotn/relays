import { Exception } from '@zeeero/tokens';

export class ServerException extends Exception<'EXCEPTION'> {}

export default ServerException;
