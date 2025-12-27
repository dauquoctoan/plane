
package com.server.plane.dto.Workspaces;

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
@Schema(description = "Analytic Workspaces")
public class WorkspacesResponse {
    private String id;
    private String owner;
    private String name;
    private String logo;
    private String slug;
    private String organizationSize;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String workspaceId;
}
