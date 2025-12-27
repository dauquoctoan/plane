
package com.server.plane.dto.ModuleIssues;

import java.time.*;
import java.math.*;

public class ModuleIssuesUpdateRequest {
    private String moduleId;
    private String issueId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
