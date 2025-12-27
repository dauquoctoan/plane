
package com.server.plane.dto.ModuleIssues;

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
@Schema(description = "Analytic ModuleIssues")
public class ModuleIssuesResponse {
    private Integer id;
    private String moduleId;
    private String issueId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
