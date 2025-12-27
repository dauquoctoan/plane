
package com.server.plane.dto.IssueVotes;

import java.time.*;
import java.math.*;

public class IssueVotesUpdateRequest {
    private String issue;
    private String actor;
    private String vote;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
