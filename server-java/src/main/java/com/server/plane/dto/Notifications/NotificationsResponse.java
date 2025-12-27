
package com.server.plane.dto.Notifications;

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
@Schema(description = "Analytic Notifications")
public class NotificationsResponse {
    private String id;
    private String workspaceId;
    private String projectId;
    private String triggeredBy;
    private String receiver;
    private String data;
    private String entityIdentifier;
    private String entityName;
    private String title;
    private String message;
    private String messageHtml;
    private String messageStripped;
    private String sender;
    private LocalDateTime readAt;
    private LocalDateTime snoozedTill;
    private LocalDateTime archivedAt;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
