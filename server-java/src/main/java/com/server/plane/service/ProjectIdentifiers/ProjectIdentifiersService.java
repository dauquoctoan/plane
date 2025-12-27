
package com.server.plane.service.ProjectIdentifiers;

import com.server.plane.entity.ProjectIdentifiers;
import com.server.plane.entity.ProjectIdentifiersExample;
import com.server.plane.mapper.ProjectIdentifiersMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class ProjectIdentifiersService extends BaseServiceImpl<ProjectIdentifiers, ProjectIdentifiersExample, Long, ProjectIdentifiersMapper> {
    public ProjectIdentifiersService(ProjectIdentifiersMapper mapper) {
        super(mapper, ProjectIdentifiers.class, ProjectIdentifiersExample.class);
    }
}
