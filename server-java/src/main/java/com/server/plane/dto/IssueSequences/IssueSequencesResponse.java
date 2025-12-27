
package com.server.plane.dto.IssueSequences;

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
@Schema(description = "Analytic IssueSequences")
public class IssueSequencesResponse {
    private String id;
    private String issueId;
    private Long sequence;
    private String deleted;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
