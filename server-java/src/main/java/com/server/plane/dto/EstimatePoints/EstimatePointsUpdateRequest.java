
package com.server.plane.dto.EstimatePoints;

import java.time.*;
import java.math.*;

public class EstimatePointsUpdateRequest {
    private String estimateId;
    private Integer key;
    private String description;
    private String value;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
