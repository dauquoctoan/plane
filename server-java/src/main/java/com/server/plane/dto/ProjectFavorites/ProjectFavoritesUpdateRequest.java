
package com.server.plane.dto.ProjectFavorites;

import java.time.*;
import java.math.*;

public class ProjectFavoritesUpdateRequest {
    private String userId;
    private String workspaceId;
    private String projectId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
