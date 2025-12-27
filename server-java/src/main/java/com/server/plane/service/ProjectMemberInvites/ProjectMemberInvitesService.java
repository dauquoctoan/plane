
package com.server.plane.service.ProjectMemberInvites;

import com.server.plane.entity.ProjectMemberInvites;
import com.server.plane.entity.ProjectMemberInvitesExample;
import com.server.plane.mapper.ProjectMemberInvitesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class ProjectMemberInvitesService extends BaseServiceImpl<ProjectMemberInvites, ProjectMemberInvitesExample, Long, ProjectMemberInvitesMapper> {
    public ProjectMemberInvitesService(ProjectMemberInvitesMapper mapper) {
        super(mapper, ProjectMemberInvites.class, ProjectMemberInvitesExample.class);
    }
}
