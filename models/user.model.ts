/** @Version 1.0.0 (fire-apps-frontend) */

import { BaseModel } from 'sjs-base-model';

/*
    // Returned Api Data Sample
    {
      username: "5v3n_08"
      email: "sd@sd.de"
      id: "786c57c9-73ab-48d7-b108-f519bfd8082d"
      updated_at: 1623832304
      created_at: 1623832304
      properties: {isFirstVisit: true}
      is_email_verified: false
      tag_ids: []
      account_type: "email"
      department_ids: []
      rights: []
    }
 */

export class User extends BaseModel {
  public readonly id: string = '';
  public readonly username: string = '';
  public readonly email: string = '';
  public readonly accountType: 'email' | 'google' | 'facebook' = 'email';
  public readonly isEmailVerified: Date | null = null;
  public readonly tagIds: string[] = [];
  public readonly departmentIds: string[] = [];
  public readonly rights: string[] = [];
  public readonly properties: IProperties = {};
  public readonly updatedAt: Date | null = null;
  public readonly createdAt: Date | null = null;

  /*
   * Client-Side properties (Not from API)
   */

  constructor(data: Partial<User>) {
    super();
    this.update(data);
  }

  public update(data: Partial<User>): void {
    super.update(data);
  }
}

interface IProperties {
  isFirstVisit?: boolean;
  showAds?: boolean;
  points?: number;
  oauth?: {
    id: string;
    nickname?: string;
    name?: string;
    avatar?: string;
    driver?: 'google' | 'facebook' | 'apple';
  };
}
