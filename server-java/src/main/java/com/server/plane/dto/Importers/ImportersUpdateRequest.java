
package com.server.plane.dto.Importers;

import java.time.*;
import java.math.*;

public class ImportersUpdateRequest {
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
