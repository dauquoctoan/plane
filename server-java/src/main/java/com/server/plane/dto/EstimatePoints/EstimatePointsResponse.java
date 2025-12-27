
package com.server.plane.dto.EstimatePoints;

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
@Schema(description = "Analytic EstimatePoints")
public class EstimatePointsResponse {
    private String id;
    private String estimateId;
    private Integer key;
    private String description;
    private String value;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
