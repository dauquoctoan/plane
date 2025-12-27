
package com.server.plane.dto.IssueViewFavorites;

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
@Schema(description = "Analytic IssueViewFavorites")
public class IssueViewFavoritesResponse {
    private Integer id;
    private String userId;
    private String view;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
