export class CreateNotificationDto {
    workspace: number;
    project: number;
    triggered_by: string;
    receiver: string;
    data: string;
    entity_identifier: string;
    entity_name: string;
    title: string;
    message: string;
    message_html: string;
    message_stripped: string;
    sender: string;
    read_at: Date;
    snoozed_till: Date;
    archived_at: Date;
}
export class UpdateNotificationDto { }
