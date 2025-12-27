
package com.server.plane.dto.ProjectDeployBoards;

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
@Schema(description = "Analytic ProjectDeployBoards")
public class ProjectDeployBoardsResponse {
    private String id;
    private String inboxId;
    private String anchor;
    private String comments;
    private String reactions;
    private String votes;
    private String views;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
