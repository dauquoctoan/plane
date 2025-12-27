
package com.server.plane.dto.IssueReactions;

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
@Schema(description = "Analytic IssueReactions")
public class IssueReactionsResponse {
    private String id;
    private String actor;
    private String issueId;
    private String reaction;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
