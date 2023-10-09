import sequelize from 'sequelize';
import { Column, DataType, ForeignKey, Is, Length, Model, Table } from 'sequelize-typescript';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { PROVIDE, STATUS } from 'src/constants/entity-constant';
import { INVALID_PROVIDE, INVALID_STATUS } from 'src/constants/message-constant';

@Table
export class ExporterHistory extends Model {
    @ForeignKey(() => Workspace)
    @Column
    workspace: number;

    // @Column({ defaultValue: sequelize.UUIDV4, type: sequelize.UUID })
    // get project(): string {
    //     return this.getDataValue('project').split(';');
    // }

    // set project(value: Array<string>) {
    //     this.setDataValue('project', value.join(';'));
    // }

    // @Is('provicde', (value) => {
    //     if (!PROVIDE.includes(value)) throw Error(INVALID_PROVIDE)
    // })
    // @Length({ max: 50 })
    // @Column
    // provider: string;

    // @Is('status', (value) => {
    //     if (!STATUS.includes(value)) throw Error(INVALID_STATUS);
    // })
    // @Column({ defaultValue: 'queued' })
    // status: string;

    // @Column({ type: DataType.TEXT })
    // reason: string;

    // @Column({ type: DataType.TEXT })
    // key: string;

    // @Length({ max: 800 })
    // @Column
    // url: string;

    // @Length({ max: 255 })
    // @Column
    // token: string;

    // @Column({ type: sequelize.UUIDV4, defaultValue: sequelize.UUIDV4 })
    // initiated_by: string;
}