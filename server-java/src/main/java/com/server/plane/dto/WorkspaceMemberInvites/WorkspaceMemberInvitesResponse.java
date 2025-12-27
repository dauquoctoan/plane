
package com.server.plane.dto.WorkspaceMemberInvites;

import java.time.*;
import java.math.*;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import io.swagger.v3.oas.annotations.media.Schema;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Analytic WorkspaceMemberInvites")
public class WorkspaceMemberInvitesResponse {
    private String id;
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
