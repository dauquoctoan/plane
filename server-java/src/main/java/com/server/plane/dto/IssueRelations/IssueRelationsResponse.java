
package com.server.plane.dto.IssueRelations;

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
@Schema(description = "Analytic IssueRelations")
public class IssueRelationsResponse {
    private String id;
    private String issueId;
    private String relatedIssueId;
    private String relationType;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
