
package com.server.plane.dto.InboxIssues;

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
@Schema(description = "Analytic InboxIssues")
public class InboxIssuesResponse {
    private String id;
    private String issueId;
    private String inboxId;
    private String idIssueDuplicateTo;
    private Integer status;
    private LocalDateTime snoozedTill;
    private String source;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
