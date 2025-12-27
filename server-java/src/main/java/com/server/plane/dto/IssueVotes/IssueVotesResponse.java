
package com.server.plane.dto.IssueVotes;

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
@Schema(description = "Analytic IssueVotes")
public class IssueVotesResponse {
    private String id;
    private String issue;
    private String actor;
    private String vote;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
