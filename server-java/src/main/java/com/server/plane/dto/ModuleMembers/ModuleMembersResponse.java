
package com.server.plane.dto.ModuleMembers;

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
@Schema(description = "Analytic ModuleMembers")
public class ModuleMembersResponse {
    private Integer id;
    private String moduleId;
    private String member;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
