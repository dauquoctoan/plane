
package com.server.plane.dto.Pages;

import java.time.*;
import java.math.*;

public class PagesUpdateRequest {
    private String ownedBy;
    private String projectId;
    private String workspaceId;
    private String name;
    private String description;
    private String descriptionHtml;
    private String descriptionStripped;
    private String access;
    private String color;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
