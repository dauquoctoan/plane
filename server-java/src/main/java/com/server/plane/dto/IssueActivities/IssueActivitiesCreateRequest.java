
package com.server.plane.dto.IssueActivities;

import java.time.*;
import java.math.*;

public class IssueActivitiesCreateRequest {
    private String issueId;
    private String issueCommentId;
    private String actor;
    private String verb;
    private String field;
    private String oldValue;
    private String newValue;
    private String comment;
    private String attachments;
    private String oldIdentifier;
    private String newIdentifier;
    private Integer epoch;
}
