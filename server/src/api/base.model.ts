import { Model } from 'sequelize';
import { Column, Table } from 'sequelize-typescript';

@Table
export default class BaseModel extends Model {
  @Column
  created_by: string;
}
