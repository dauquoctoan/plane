
package com.server.plane.service.TeamMembers;

import com.server.plane.entity.TeamMembers;
import com.server.plane.entity.TeamMembersExample;
import com.server.plane.mapper.TeamMembersMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class TeamMembersService extends BaseServiceImpl<TeamMembers, TeamMembersExample, Long, TeamMembersMapper> {
    public TeamMembersService(TeamMembersMapper mapper) {
        super(mapper, TeamMembers.class, TeamMembersExample.class);
    }
}
