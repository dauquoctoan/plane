
package com.server.plane.dto.WorkspaceThemes;

import java.time.*;
import java.math.*;

public class WorkspaceThemesUpdateRequest {
    private String workspaceId;
    private String actor;
    private String name;
    private String colors;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
