
package com.server.plane.dto.Pages;

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
@Schema(description = "Analytic Pages")
public class PagesResponse {
    private String id;
    private String ownedBy;
    private String projectId;
    private String workspaceId;
    private String name;
    private String description;
    private String descriptionHtml;
    private String descriptionStripped;
    private String access;
    private String color;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
