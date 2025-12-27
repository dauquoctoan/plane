
package com.server.plane.dto.ProjectViews;

import java.time.*;
import java.math.*;

public class ProjectViewsUpdateRequest {
    private String workspaceId;
    private String createdBy;
    private String projectId;
    private String name;
    private String description;
    private String query;
    private String access;
    private String queryData;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
