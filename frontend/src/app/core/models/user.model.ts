export type UserRole =
  | 'ADMIN'
  | 'SUPPORT_AGENT'
  | 'REQUESTER';

export interface User {
  readonly id: string;
  fullName: string;
  email: string;
  readonly roles: readonly UserRole[];
}