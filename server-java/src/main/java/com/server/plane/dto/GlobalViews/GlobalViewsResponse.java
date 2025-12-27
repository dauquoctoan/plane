
package com.server.plane.dto.GlobalViews;

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
@Schema(description = "Analytic GlobalViews")
public class GlobalViewsResponse {
    private String id;
    private String workspaceId;
    private String name;
    private String description;
    private String query;
    private String access;
    private String queryData;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
