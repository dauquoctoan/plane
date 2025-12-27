
package com.server.plane.dto.States;

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
@Schema(description = "Analytic States")
public class StatesResponse {
    private String id;
    private String projectId;
    private String createdBy;
    private String name;
    private String description;
    private String color;
    private String slug;
    private String sequence;
    private String groupName;
    private String isDefault;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
