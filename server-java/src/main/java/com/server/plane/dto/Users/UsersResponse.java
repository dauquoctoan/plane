
package com.server.plane.dto.Users;

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
@Schema(description = "Analytic Users")
public class UsersResponse {
    private String id;
    private String lastWorkspaceId;
    private String username;
    private String mobileNumber;
    private String email;
    private String firstName;
    private String lastName;
    private String avatar;
    private String coverImage;
    private String lastLocation;
    private String createdLocation;
    private String isSuperuser;
    private String isManaged;
    private String isActive;
    private String isStaff;
    private String isEmailVerified;
    private String pin;
    private Long pinTimeExpired;
    private String isOnboarded;
    private String token;
    private String billingAddressCountry;
    private String billingAddress;
    private String hasBillingAddress;
    private String USER_TIMEZONE_CHOICES;
    private LocalDate userTimezone;
    private String lastLoginIp;
    private String lastLogoutIp;
    private String lastLoginMedium;
    private String lastLoginUserAgent;
    private LocalDateTime tokenUpdatedAt;
    private String myIssuesProp;
    private String role;
    private String isBot;
    private String theme;
    private String displayName;
    private String isTourCompleted;
    private String onboardingStep;
    private LocalDateTime lastLogoutTime;
    private LocalDateTime updatedAt;
}
