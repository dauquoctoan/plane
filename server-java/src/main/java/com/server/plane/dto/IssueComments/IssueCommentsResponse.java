
package com.server.plane.dto.IssueComments;

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
@Schema(description = "Analytic IssueComments")
public class IssueCommentsResponse {
    private String id;
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
