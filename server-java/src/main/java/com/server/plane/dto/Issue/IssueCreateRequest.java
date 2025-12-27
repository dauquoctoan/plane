
package com.server.plane.dto.Issue;

import java.time.*;
import java.math.*;

public class IssueCreateRequest {
    private String projectId;
    private String createBy;
    private String workspaceId;
    private String parent;
    private String stateId;
    private String estimatePointId;
    private String name;
    private String description;
    private String descriptionHtml;
    private String descriptionStripped;
    private String priority;
    private LocalDateTime startDate;
    private LocalDateTime targetDate;
    private Integer sequenceId;
    private Integer sortOrder;
    private String completedAt;
    private LocalDateTime archivedAt;
    private String isDraft;
}
