
package com.server.plane.dto.ApiTokens;

import java.time.*;
import java.math.*;

public class ApiTokensUpdateRequest {
    private String workspaceId;
    private String userId;
    private String token;
    private String label;
    private Integer userType;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
