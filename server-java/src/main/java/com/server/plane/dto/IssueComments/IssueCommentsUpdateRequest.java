
package com.server.plane.dto.IssueComments;

import java.time.*;
import java.math.*;

public class IssueCommentsUpdateRequest {
    private String actor;
    private String issueId;
    private String commentStripped;
    private String commentJson;
    private String commentHtml;
    private String attachments;
    private String access;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
