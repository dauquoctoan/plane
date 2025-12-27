
package com.server.plane.dto.PageLabels;

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
@Schema(description = "Analytic PageLabels")
public class PageLabelsResponse {
    private String label;
    private String page;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
