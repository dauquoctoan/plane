
package com.server.plane.dto.ProjectMembers;

import java.time.*;
import java.math.*;

public class ProjectMembersCreateRequest {
    private String member;
    private String projectId;
    private String workspaceId;
    private String comment;
    private Integer role;
    private String viewProps;
    private String defaultProps;
    private String preferences;
    private String sortOrder;
}
