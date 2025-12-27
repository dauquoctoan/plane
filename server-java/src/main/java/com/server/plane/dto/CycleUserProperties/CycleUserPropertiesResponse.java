
package com.server.plane.dto.CycleUserProperties;

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
@Schema(description = "Analytic CycleUserProperties")
public class CycleUserPropertiesResponse {
    private String id;
    private String cycleId;
    private String userId;
    private String projectId;
    private String filters;
    private String displayFilters;
    private String displayProperties;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
