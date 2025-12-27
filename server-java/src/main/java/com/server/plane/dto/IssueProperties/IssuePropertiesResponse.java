
package com.server.plane.dto.IssueProperties;

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
@Schema(description = "Analytic IssueProperties")
public class IssuePropertiesResponse {
    private String id;
    private String userId;
    private String displayProperties;
    private String displayFilters;
    private String filters;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
