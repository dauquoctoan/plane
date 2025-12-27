
package com.server.plane.dto.Modules;

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
@Schema(description = "Analytic Modules")
public class ModulesResponse {
    private String id;
    private String lead;
    private String projectId;
    private String workspaceId;
    private String member;
    private String name;
    private String description;
    private String descriptionText;
    private String descriptionHtml;
    private LocalDateTime startDate;
    private LocalDateTime targetDate;
    private String status;
    private String viewProps;
    private String sortOrder;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
