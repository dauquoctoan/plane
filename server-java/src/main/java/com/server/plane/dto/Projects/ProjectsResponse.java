
package com.server.plane.dto.Projects;

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
@Schema(description = "Analytic Projects")
public class ProjectsResponse {
    private String id;
    private String createdBy;
    private String estimateId;
    private String defaultAssignee;
    private String projectLead;
    private String workspaceId;
    private String name;
    private String description;
    private String descriptionText;
    private String descriptionHtml;
    private Integer network;
    private String identifier;
    private String emoji;
    private String iconProp;
    private String moduleView;
    private String cycleView;
    private String issueViewsView;
    private String pageView;
    private String inboxView;
    private String coverImage;
    private Integer archiveIn;
    private Integer closeIn;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
