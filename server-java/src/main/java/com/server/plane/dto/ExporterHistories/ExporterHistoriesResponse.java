
package com.server.plane.dto.ExporterHistories;

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
@Schema(description = "Analytic ExporterHistories")
public class ExporterHistoriesResponse {
    private Integer id;
    private String workspaceId;
    private String project;
    private String provider;
    private String status;
    private String reason;
    private String key;
    private String url;
    private String token;
    private String initiatedBy;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
