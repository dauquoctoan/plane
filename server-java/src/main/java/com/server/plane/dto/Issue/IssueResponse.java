
package com.server.plane.dto.Issue;

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
@Schema(description = "Analytic Issue")
public class IssueResponse {
    private String id;
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
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
