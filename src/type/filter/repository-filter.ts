import {Repository} from '../model/repository';

export type RepositoryFilter = {
  name?: string;
  isArchived?: boolean;
  updatedAtStart?: Date;
  updatedAtEnd?: Date;
  visibility?: string;
}
