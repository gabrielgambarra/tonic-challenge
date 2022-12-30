import { UserListData } from './UserListResponse.interface';

export interface CreateEditModalData {
  element: UserListData;
  type: 'edit' | 'create';
}
