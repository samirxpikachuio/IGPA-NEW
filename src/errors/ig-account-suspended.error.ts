import { IgClientError } from './ig-client.error';

export class IgAccountSuspendedError extends IgClientError {
  constructor() {
    super('Instagram account is suspended');
  }
}
