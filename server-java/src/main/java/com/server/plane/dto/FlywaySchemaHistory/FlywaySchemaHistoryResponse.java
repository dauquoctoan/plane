
package com.server.plane.dto.FlywaySchemaHistory;

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
@Schema(description = "Analytic FlywaySchemaHistory")
public class FlywaySchemaHistoryResponse {
    private Integer installedRank;
    private String version;
    private String description;
    private String type;
    private String script;
    private Integer checksum;
    private String installedBy;
    private LocalDateTime installedOn;
    private Integer executionTime;
    private String success;
}
