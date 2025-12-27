
package com.server.plane.dto.IssueLabel;

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
@Schema(description = "Analytic IssueLabel")
public class IssueLabelResponse {
    private String issueId;
    private String labelId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
