import { Column, DataType, Is, Length, Model, Table } from 'sequelize-typescript';
import { ACCESS, INVALID_ACCESS, INVALID_ROLE, ROLE } from 'src/constants/entity-constant';

@Table
export class IssueView extends Model {
    @Length({ min: 0, max: 255 })
    @Column({ allowNull: false })
    name: string;

    @Column
    description: string;

    @Column({ type: DataType.JSON })
    query: String;

    @Is('access', (value) => {
        if (!ACCESS.includes(value)) {
            throw new Error(INVALID_ACCESS);
        }
    })
    @Column({ defaultValue: 1 })
    access: number;

    @Column({ type: DataType.JSON, defaultValue: {} })
    query_data: string;
}