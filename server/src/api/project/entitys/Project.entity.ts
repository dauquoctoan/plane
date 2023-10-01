import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Project extends Model{
    @Column
    NETWORK_CHOICES: string;
    
    @Column
    name: string;

    @Column
    description: string;

    @Column
    description_text: string;

    @Column
    description_html: string;
    
    @Column
    network: string;

    @Column
    workspace: string;

    @Column
    identifier: string;

    @Column
    default_assignee: string;

    @Column
    project_lead: string;

    
    @Column
    emoji: string;

    
    @Column
    icon_prop: string;

    @Column
    module_view: string;

    @Column
    cycle_view: string;

    @Column
    issue_views_view: string;

    @Column
    page_view: string;

    @Column
    inbox_view: string;

    @Column
    cover_image: string;

    @Column
    estimate: string;

    @Column
    archive_in: string;

    @Column
    close_in: string;

    @Column
    default_state: string;
}