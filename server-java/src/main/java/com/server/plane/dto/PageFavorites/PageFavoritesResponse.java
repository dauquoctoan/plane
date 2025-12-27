
package com.server.plane.dto.PageFavorites;

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
@Schema(description = "Analytic PageFavorites")
public class PageFavoritesResponse {
    private Integer id;
    private String userId;
    private String pageId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
