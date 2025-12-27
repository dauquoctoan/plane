
package com.server.plane.dto.IssueViews;

import java.time.*;
import java.math.*;

public class IssueViewsUpdateRequest {
    private String workspaceId;
    private String createdBy;
    private String name;
    private String description;
    private String query;
    private Integer access;
    private String queryData;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
