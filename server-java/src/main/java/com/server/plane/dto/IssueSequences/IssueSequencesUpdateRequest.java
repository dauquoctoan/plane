
package com.server.plane.dto.IssueSequences;

import java.time.*;
import java.math.*;

public class IssueSequencesUpdateRequest {
    private String issueId;
    private Long sequence;
    private String deleted;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
