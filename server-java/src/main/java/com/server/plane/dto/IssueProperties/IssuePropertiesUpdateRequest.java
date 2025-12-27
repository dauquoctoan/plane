
package com.server.plane.dto.IssueProperties;

import java.time.*;
import java.math.*;

public class IssuePropertiesUpdateRequest {
    private String userId;
    private String displayProperties;
    private String displayFilters;
    private String filters;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
