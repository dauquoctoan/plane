import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import sequelize from 'sequelize';
import { DEFAULT_PROPS } from 'src/constants/entity-constant';
import { User } from 'src/api/user/entitys/User.entity';
import { Project } from 'src/api/project/entitys/Project.entity';
import { Module } from './Module.entity';

@Table
export class ModuleUserProperties extends Model<ModuleUserProperties> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;

    @ForeignKey(() => Module)
    @Column({ type: sequelize.UUID })
    module_id:string;

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID })
    user_id:string;

    @ForeignKey(() => Project)
    @Column({ type: sequelize.UUID })
    project_id:string;

    @Column({ type: DataType.JSON, defaultValue: DEFAULT_PROPS.filters })
    filters: string;

    @Column({ type: DataType.JSON, defaultValue: DEFAULT_PROPS.display_filters })
    display_filters: string;

    @Column({ type: DataType.JSON, defaultValue: DEFAULT_PROPS.display_properties })
    display_properties: string;

    /* =================== */

    @BelongsTo(() => User, {
        foreignKey:'user_id', 
        onDelete: "CASCADE"
    })
    user: User;

    @BelongsTo(() => Module, {
        foreignKey:'module_id', 
        onDelete: "CASCADE"
    })
    module: Module;

    @BelongsTo(() => Project, {
        foreignKey :'project_id', 
        onDelete: "CASCADE"
    })
    project: Project;
}