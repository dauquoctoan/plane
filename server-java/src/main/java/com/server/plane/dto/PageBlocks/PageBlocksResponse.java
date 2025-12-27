
package com.server.plane.dto.PageBlocks;

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
@Schema(description = "Analytic PageBlocks")
public class PageBlocksResponse {
    private String id;
    private String pageId;
    private String issueId;
    private String name;
    private String description;
    private String descriptionHtml;
    private String descriptionStripped;
    private LocalDateTime completedAt;
    private String sortOrder;
    private String sync;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
