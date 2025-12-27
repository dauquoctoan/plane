
package com.server.plane.dto.WorkspaceMembers;

import java.time.*;
import java.math.*;

public class WorkspaceMembersCreateRequest {
    private String workspaceId;
    private String member;
    private Integer role;
    private String companyRole;
    private String viewProps;
    private String defaultProps;
    private String isActive;
}
