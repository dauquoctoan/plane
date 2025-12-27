
package com.server.plane.dto.IssueActivities;

import java.time.*;
import java.math.*;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import io.swagger.v3.oas.annotations.media.Schema;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Analytic IssueActivities")
public class IssueActivitiesResponse {
    private String id;
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
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
