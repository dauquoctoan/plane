
package com.server.plane.dto.PageBlocks;

import java.time.*;
import java.math.*;

public class PageBlocksUpdateRequest {
    private String pageId;
    private String issueId;
    private String name;
    private String description;
    private String descriptionHtml;
    private String descriptionStripped;
    private LocalDateTime completedAt;
    private String sortOrder;
    private String sync;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
