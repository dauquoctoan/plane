
package com.server.plane.dto.AnalyticViews;

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
@Schema(description = "Analytic AnalyticViews")
public class AnalyticViewsResponse {
    private String id;
    private String workspaceId;
    private String name;
    private String description;
    private String query;
    private String queryDict;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
