
package com.server.plane.dto.ModuleUserProperties;

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
@Schema(description = "Analytic ModuleUserProperties")
public class ModuleUserPropertiesResponse {
    private String id;
    private String moduleId;
    private String userId;
    private String projectId;
    private String filters;
    private String displayFilters;
    private String displayProperties;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
