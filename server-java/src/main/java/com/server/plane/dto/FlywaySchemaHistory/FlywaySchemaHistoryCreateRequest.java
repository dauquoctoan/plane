
package com.server.plane.dto.FlywaySchemaHistory;

import java.time.*;
import java.math.*;

public class FlywaySchemaHistoryCreateRequest {
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
