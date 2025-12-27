
package com.server.plane.dto.ProjectFavorites;

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
@Schema(description = "Analytic ProjectFavorites")
public class ProjectFavoritesResponse {
    private String id;
    private String userId;
    private String workspaceId;
    private String projectId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
