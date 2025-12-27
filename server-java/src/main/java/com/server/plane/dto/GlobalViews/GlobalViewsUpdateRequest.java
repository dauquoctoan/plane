
package com.server.plane.dto.GlobalViews;

import java.time.*;
import java.math.*;

public class GlobalViewsUpdateRequest {
    private String workspaceId;
    private String name;
    private String description;
    private String query;
    private String access;
    private String queryData;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
