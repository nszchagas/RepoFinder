export type Repository = {
  isArchived: boolean;
  name: string;
  updatedAt: Date;
  visibility: string; //@TODO CREATE ENUM PUBLIC PRIVATE
}
