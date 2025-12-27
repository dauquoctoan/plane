
package com.server.plane.dto.FileAssets;

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
@Schema(description = "Analytic FileAssets")
public class FileAssetsResponse {
    private String id;
    private String workspaceId;
    private String attributes;
    private String asset;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
