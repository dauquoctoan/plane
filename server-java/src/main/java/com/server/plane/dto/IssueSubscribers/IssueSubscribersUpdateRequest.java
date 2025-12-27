
package com.server.plane.dto.IssueSubscribers;

import java.time.*;
import java.math.*;

public class IssueSubscribersUpdateRequest {
    private String issueId;
    private String subscriber;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
