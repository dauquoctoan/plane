
package com.server.plane.dto.CycleUserProperties;

import java.time.*;
import java.math.*;

public class CycleUserPropertiesUpdateRequest {
    private String cycleId;
    private String userId;
    private String projectId;
    private String filters;
    private String displayFilters;
    private String displayProperties;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
