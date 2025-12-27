
package com.server.plane.dto.IssueBlockers;

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
@Schema(description = "Analytic IssueBlockers")
public class IssueBlockersResponse {
    private String id;
    private String block;
    private String blockedBy;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String blockedBys;
    private String blocks;
}
