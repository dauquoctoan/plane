
package com.server.plane.dto.ProjectIdentifiers;

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
@Schema(description = "Analytic ProjectIdentifiers")
public class ProjectIdentifiersResponse {
    private String id;
    private String workspaceId;
    private String projectId;
    private String name;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
