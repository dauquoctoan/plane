/** 
* ! ROLE 
* * 20 : Owner
* * 15 : Admin
* * 10 : Member
* * 5 : Guest
*/

export const ROLE = [5, 10, 15, 20];

/** 
* ! ACCESS
* * 0 : Private
* * 1 : Public
*/

export const ACCESS = [0, 1];

/** 
* ! NETWORK
* * 0 : Seccret
* * 1 : Public
*/

export const NETWORK = [0, 1];

/** 
* ! MEDIUM
* * Google : google
* * Github : github
*/

export const MEDIUM = ['Google', 'Github'];

export const SORT_ORDER = 65535;

export const DEFAULT_ONBOARDING = {
    "profile_complete": false,
    "workspace_create": false,
    "workspace_invite": false,
    "workspace_join": false,
}

export const DEFAULT_PREFERENCES = {
    "pages": { "block_display": true }
}

export const DEFAULT_PROPS = {
    "filters": {
        "priority": null,
        "state": null,
        "state_group": null,
        "assignees": null,
        "created_by": null,
        "labels": null,
        "start_date": null,
        "target_date": null,
        "subscriber": null,
    },
    "display_filters": {
        "group_by": null,
        "order_by": '-created_at',
        "type": null,
        "sub_issue": true,
        "show_empty_groups": true,
        "layout": "list",
        "calendar_date_range": "",
    },
    "display_properties": {
        "assignee": true,
        "attachment_count": true,
        "created_on": true,
        "due_date": true,
        "estimate": true,
        "key": true,
        "labels": true,
        "link": true,
        "priority": true,
        "start_date": true,
        "state": true,
        "sub_issue_count": true,
        "updated_on": true,
    }
}

export const DEFAULT_VIEWS = {
    "list": true,
    "kanban": true,
    "calendar": true,
    "gantt": true,
    "spreadsheet": true,
}