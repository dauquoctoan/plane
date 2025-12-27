
package com.server.plane.dto.ExporterHistories;

import java.time.*;
import java.math.*;

public class ExporterHistoriesUpdateRequest {
    private String workspaceId;
    private String project;
    private String provider;
    private String status;
    private String reason;
    private String key;
    private String url;
    private String token;
    private String initiatedBy;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
