
package com.server.plane.dto.CommentReaction;

import java.time.*;
import java.math.*;

public class CommentReactionUpdateRequest {
    private String actor;
    private String comment;
    private String reaction;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
