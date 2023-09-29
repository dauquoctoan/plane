import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Issue extends Model{
    @Column
    PRIORITY_CHOICES: string;
    
    @Column
    parent: string;

    @Column
    state: string;
    
    @Column
    estimate_point: string;

    @Column
    name: string;

    @Column
    description: string;

    @Column
    description_html: string;

    @Column
    description_stripped: string;

    @Column
    priority: string;

    @Column
    start_date: string;

    @Column
    target_date: string;

    @Column
    labels: string;

    @Column
    sort_order: string;

    @Column
    completed_at: string;
    
    @Column
    is_draft: string;

    @Column
    objects: string;

    @Column
    issue_objects: string;
}