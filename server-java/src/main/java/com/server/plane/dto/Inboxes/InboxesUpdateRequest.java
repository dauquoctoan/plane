
package com.server.plane.dto.Inboxes;

import java.time.*;
import java.math.*;

public class InboxesUpdateRequest {
    private String name;
    private String description;
    private String isDefault;
    private String viewProps;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
