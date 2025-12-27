
package com.server.plane.dto.ApiTokens;

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
@Schema(description = "Analytic ApiTokens")
public class ApiTokensResponse {
    private String id;
    private String workspaceId;
    private String userId;
    private String token;
    private String label;
    private Integer userType;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
