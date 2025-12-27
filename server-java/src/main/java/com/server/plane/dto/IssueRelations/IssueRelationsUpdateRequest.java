
package com.server.plane.dto.IssueRelations;

import java.time.*;
import java.math.*;

public class IssueRelationsUpdateRequest {
    private String issueId;
    private String relatedIssueId;
    private String relationType;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
