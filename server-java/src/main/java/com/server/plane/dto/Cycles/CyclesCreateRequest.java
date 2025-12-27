
package com.server.plane.dto.Cycles;

import java.time.*;
import java.math.*;

public class CyclesCreateRequest {
    private String ownedBy;
    private String createdBy;
    private String projectId;
    private String workspaceId;
    private String name;
    private String description;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String viewProps;
    private String sortOrder;
}
