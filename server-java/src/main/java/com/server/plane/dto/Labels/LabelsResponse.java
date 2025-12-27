
package com.server.plane.dto.Labels;

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
@Schema(description = "Analytic Labels")
public class LabelsResponse {
    private String id;
    private String projectId;
    private String createdBy;
    private String workspaceId;
    private String parent;
    private String name;
    private String description;
    private String color;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
