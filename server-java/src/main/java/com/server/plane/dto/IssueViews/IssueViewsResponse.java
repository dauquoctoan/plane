
package com.server.plane.dto.IssueViews;

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
@Schema(description = "Analytic IssueViews")
public class IssueViewsResponse {
    private String id;
    private String workspaceId;
    private String createdBy;
    private String name;
    private String description;
    private String query;
    private Integer access;
    private String queryData;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
