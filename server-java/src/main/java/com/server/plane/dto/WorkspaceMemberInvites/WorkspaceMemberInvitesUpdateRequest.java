
package com.server.plane.dto.WorkspaceMemberInvites;

import java.time.*;
import java.math.*;

public class WorkspaceMemberInvitesUpdateRequest {
    private String workspaceId;
    private String email;
    private String accepted;
    private String token;
    private String message;
    private LocalDateTime respondedAt;
    private Integer role;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
