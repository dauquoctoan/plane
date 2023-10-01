import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Notification extends Model{
    @Column
    workspace: string;
    
    @Column
    project: string;

    @Column
    data: string;
    
    @Column
    entity_identifier: string;
    
    @Column
    entity_name: string;
    
    @Column
    title: string;

    @Column
    message: string;

    @Column
    message_html: string;

    @Column
    message_stripped: string;

    @Column
    sender: string;

    @Column
    triggered_by: string;

    @Column
    receiver: string;

    @Column
    read_at: string;

    @Column
    snoozed_till: string;

    @Column
    archived_at: string;
}