
package com.server.plane.dto.ModuleLinks;

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
@Schema(description = "Analytic ModuleLinks")
public class ModuleLinksResponse {
    private String id;
    private String moduleId;
    private String title;
    private String url;
    private String metadata;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
