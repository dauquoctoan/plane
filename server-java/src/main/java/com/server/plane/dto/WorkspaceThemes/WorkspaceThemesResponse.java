
package com.server.plane.dto.WorkspaceThemes;

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
@Schema(description = "Analytic WorkspaceThemes")
public class WorkspaceThemesResponse {
    private String id;
    private String workspaceId;
    private String actor;
    private String name;
    private String colors;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
