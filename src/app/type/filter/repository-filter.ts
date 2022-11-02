export type RepositoryFilter = {
  name?: string;
  isArchived?: boolean;
  pushedAtStart?: Date;
  pushedAtEnd?: Date;
  visibility?: string;
}
