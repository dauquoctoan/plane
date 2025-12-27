
package com.server.plane.dto.ProjectMemberInvites;

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
@Schema(description = "Analytic ProjectMemberInvites")
public class ProjectMemberInvitesResponse {
    private String id;
    private String email;
    private String accepted;
    private String token;
    private String message;
    private LocalDateTime respondedAt;
    private Integer role;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
