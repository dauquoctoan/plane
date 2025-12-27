
package com.server.plane.dto.ProjectMemberInvites;

import java.time.*;
import java.math.*;

public class ProjectMemberInvitesCreateRequest {
    private String email;
    private String accepted;
    private String token;
    private String message;
    private LocalDateTime respondedAt;
    private Integer role;
}
