
package com.server.plane.dto.IssueSubscribers;

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
@Schema(description = "Analytic IssueSubscribers")
public class IssueSubscribersResponse {
    private Integer id;
    private String issueId;
    private String subscriber;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
