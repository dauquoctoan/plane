
package com.server.plane.dto.InboxIssues;

import java.time.*;
import java.math.*;

public class InboxIssuesUpdateRequest {
    private String issueId;
    private String inboxId;
    private String idIssueDuplicateTo;
    private Integer status;
    private LocalDateTime snoozedTill;
    private String source;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
