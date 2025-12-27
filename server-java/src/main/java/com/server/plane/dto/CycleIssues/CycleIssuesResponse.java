
package com.server.plane.dto.CycleIssues;

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
@Schema(description = "Analytic CycleIssues")
public class CycleIssuesResponse {
    private String id;
    private String issueId;
    private String cycleId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
