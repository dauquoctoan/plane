
package com.server.plane.service.Teams;

import com.server.plane.entity.Teams;
import com.server.plane.entity.TeamsExample;
import com.server.plane.mapper.TeamsMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class TeamsService extends BaseServiceImpl<Teams, TeamsExample, Long, TeamsMapper> {
    public TeamsService(TeamsMapper mapper) {
        super(mapper, Teams.class, TeamsExample.class);
    }
}
