import { Column, Model, Table, Length, Is, DataType, } from 'sequelize-typescript';

const GROUP = ['backlog','unstarted','started','completed','cancelled']
@Table
export class State extends Model{
    @Length({ min: 1, max: 255 })
    @Column({allowNull:false})
    name: string;
    
    @Column({type: DataType.TEXT})
    description: string;

    @Length({ min: 1, max: 255 })
    @Column({allowNull:false})
    color: string;

    @Length({ min: 0, max: 100 })
    @Column
    slug: string;

    @Column({defaultValue:65535,type: DataType.FLOAT})
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