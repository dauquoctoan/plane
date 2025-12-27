
package com.server.plane.dto.Cycles;

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
@Schema(description = "Analytic Cycles")
public class CyclesResponse {
    private String id;
    private String ownedBy;
    private String createdBy;
    private String projectId;
    private String workspaceId;
    private String name;
    private String description;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String viewProps;
    private String sortOrder;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
