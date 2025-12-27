
package com.server.plane.dto.Inboxes;

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
@Schema(description = "Analytic Inboxes")
public class InboxesResponse {
    private String id;
    private String name;
    private String description;
    private String isDefault;
    private String viewProps;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
