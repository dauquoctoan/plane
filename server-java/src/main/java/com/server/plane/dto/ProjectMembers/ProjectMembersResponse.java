
package com.server.plane.dto.ProjectMembers;

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
@Schema(description = "Analytic ProjectMembers")
public class ProjectMembersResponse {
    private String id;
    private String member;
    private String projectId;
    private String workspaceId;
    private String comment;
    private Integer role;
    private String viewProps;
    private String defaultProps;
    private String preferences;
    private String sortOrder;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
