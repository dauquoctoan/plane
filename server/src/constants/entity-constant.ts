export const INVALID_ROLE = "The role type must be '5','10','15','20'"

/* (20, "Owner"), (15, "Admin"), (10, "Member"), (5, "Guest")*/
export const ROLE = [5, 10, 15, 20]

export const DEFAULT_ONBOARDING = {
    "profile_complete": false,
    "workspace_create": false,
    "workspace_invite": false,
    "workspace_join": false,
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

