
package com.server.plane.dto.Importers;

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
@Schema(description = "Analytic Importers")
public class ImportersResponse {
    private String id;
    private String token;
    private String initiatedBy;
    private String service;
    private String status;
    private String metadata;
    private String config;
    private String data;
    private String importedData;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
