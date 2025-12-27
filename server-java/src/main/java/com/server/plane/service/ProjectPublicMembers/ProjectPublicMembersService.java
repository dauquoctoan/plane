
package com.server.plane.service.ProjectPublicMembers;

import com.server.plane.entity.ProjectPublicMembers;
import com.server.plane.entity.ProjectPublicMembersExample;
import com.server.plane.mapper.ProjectPublicMembersMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class ProjectPublicMembersService extends BaseServiceImpl<ProjectPublicMembers, ProjectPublicMembersExample, Long, ProjectPublicMembersMapper> {
    public ProjectPublicMembersService(ProjectPublicMembersMapper mapper) {
        super(mapper, ProjectPublicMembers.class, ProjectPublicMembersExample.class);
    }
}
