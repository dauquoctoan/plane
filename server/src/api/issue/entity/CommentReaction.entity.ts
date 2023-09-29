import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class CommentReaction extends Model{
    @Column
    actor: string;
    
    @Column
    comment: string;

    @Column
    reaction: string;
}