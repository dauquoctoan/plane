
package com.server.plane.dto.CycleFavorites;

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
@Schema(description = "Analytic CycleFavorites")
public class CycleFavoritesResponse {
    private String id;
    private String userId;
    private String cycleId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
