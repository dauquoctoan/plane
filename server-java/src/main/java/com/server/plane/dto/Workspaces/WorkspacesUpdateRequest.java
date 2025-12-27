
package com.server.plane.dto.Workspaces;

import java.time.*;
import java.math.*;

public class WorkspacesUpdateRequest {
    private String owner;
    private String name;
    private String logo;
    private String slug;
    private String organizationSize;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String workspaceId;
}
