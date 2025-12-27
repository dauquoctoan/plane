
package com.server.plane.dto.SocialLoginConnections;

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
@Schema(description = "Analytic SocialLoginConnections")
public class SocialLoginConnectionsResponse {
    private String id;
    private String userId;
    private String medium;
    private LocalDateTime lastLoginAt;
    private LocalDateTime lastReceivedAt;
    private String tokenData;
    private String extraData;
    private LocalDateTime createdAt;
}
