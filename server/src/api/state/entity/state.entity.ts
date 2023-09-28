import { Column, Model, Table, AutoIncrement, Length, AllowNull,NotEmpty, PrimaryKey, Is, DataType, } from 'sequelize-typescript';

const GROUP = ['backlog','unstarted','started','completed','cancelled']

@Table
export class State extends Model{
    @Column
    name: string;
    
    @Column
    description: string;

    @Column
    color: string;

    @Column
    slug: string;

    @Column({defaultValue:65535,type: DataType.BIGINT})
    sequence: number;

    @Is('group', (value) => {
        if (!GROUP.includes(value)) {
        throw new Error("The group type must be 'backlog','unstarted','started','completed','cancelled'");
        }
    })
    @Column({allowNull:false})
    group: string;

    @Column({defaultValue: false})
    default: boolean;    
}