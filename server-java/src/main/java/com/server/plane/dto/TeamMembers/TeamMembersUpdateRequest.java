
package com.server.plane.dto.TeamMembers;

import java.time.*;
import java.math.*;

public class TeamMembersUpdateRequest {
    private String workspaceId;
    private String teamId;
    private String member;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
