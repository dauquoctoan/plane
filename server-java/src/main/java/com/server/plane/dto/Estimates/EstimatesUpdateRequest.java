
package com.server.plane.dto.Estimates;

import java.time.*;
import java.math.*;

public class EstimatesUpdateRequest {
    private String projectId;
    private String workspaceId;
    private String name;
    private String description;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
