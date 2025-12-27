
package com.server.plane.dto.AnalyticViews;

import java.time.*;
import java.math.*;

public class AnalyticViewsUpdateRequest {
    private String workspaceId;
    private String name;
    private String description;
    private String query;
    private String queryDict;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
