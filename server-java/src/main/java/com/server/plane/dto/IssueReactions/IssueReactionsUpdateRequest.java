
package com.server.plane.dto.IssueReactions;

import java.time.*;
import java.math.*;

public class IssueReactionsUpdateRequest {
    private String actor;
    private String issueId;
    private String reaction;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
