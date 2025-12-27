
package com.server.plane.service.ProjectMembers;

import com.server.plane.entity.ProjectMembers;
import com.server.plane.entity.ProjectMembersExample;
import com.server.plane.mapper.ProjectMembersMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class ProjectMembersService extends BaseServiceImpl<ProjectMembers, ProjectMembersExample, Long, ProjectMembersMapper> {
    public ProjectMembersService(ProjectMembersMapper mapper) {
        super(mapper, ProjectMembers.class, ProjectMembersExample.class);
    }
}
