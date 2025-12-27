
package com.server.plane.service.WorkspaceMemberInvites;

import com.server.plane.entity.WorkspaceMemberInvites;
import com.server.plane.entity.WorkspaceMemberInvitesExample;
import com.server.plane.mapper.WorkspaceMemberInvitesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class WorkspaceMemberInvitesService extends BaseServiceImpl<WorkspaceMemberInvites, WorkspaceMemberInvitesExample, Long, WorkspaceMemberInvitesMapper> {
    public WorkspaceMemberInvitesService(WorkspaceMemberInvitesMapper mapper) {
        super(mapper, WorkspaceMemberInvites.class, WorkspaceMemberInvitesExample.class);
    }
}
