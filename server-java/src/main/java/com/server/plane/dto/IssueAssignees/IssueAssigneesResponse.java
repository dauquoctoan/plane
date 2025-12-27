
package com.server.plane.dto.IssueAssignees;

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
@Schema(description = "Analytic IssueAssignees")
public class IssueAssigneesResponse {
    private String issueId;
    private String assignee;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
