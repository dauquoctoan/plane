
package com.server.plane.dto.ProjectPublicMembers;

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
@Schema(description = "Analytic ProjectPublicMembers")
public class ProjectPublicMembersResponse {
    private String id;
    private String member;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
