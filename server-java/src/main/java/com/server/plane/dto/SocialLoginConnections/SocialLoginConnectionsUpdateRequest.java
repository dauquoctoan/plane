
package com.server.plane.dto.SocialLoginConnections;

import java.time.*;
import java.math.*;

public class SocialLoginConnectionsUpdateRequest {
    private String userId;
    private String medium;
    private LocalDateTime lastLoginAt;
    private LocalDateTime lastReceivedAt;
    private String tokenData;
    private String extraData;
    private LocalDateTime createdAt;
}
