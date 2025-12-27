
package com.server.plane.dto.IssueLinks;

import java.time.*;
import java.math.*;

public class IssueLinksUpdateRequest {
    private String issueId;
    private String title;
    private String url;
    private String metadata;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
