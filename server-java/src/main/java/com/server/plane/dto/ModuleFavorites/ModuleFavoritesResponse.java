
package com.server.plane.dto.ModuleFavorites;

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
@Schema(description = "Analytic ModuleFavorites")
public class ModuleFavoritesResponse {
    private Integer id;
    private String userId;
    private String moduleId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
