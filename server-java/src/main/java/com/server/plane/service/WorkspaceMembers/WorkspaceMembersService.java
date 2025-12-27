
package com.server.plane.service.WorkspaceMembers;

import com.server.plane.entity.WorkspaceMembers;
import com.server.plane.entity.WorkspaceMembersExample;
import com.server.plane.mapper.WorkspaceMembersMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class WorkspaceMembersService extends BaseServiceImpl<WorkspaceMembers, WorkspaceMembersExample, Long, WorkspaceMembersMapper> {
    public WorkspaceMembersService(WorkspaceMembersMapper mapper) {
        super(mapper, WorkspaceMembers.class, WorkspaceMembersExample.class);
    }
}
