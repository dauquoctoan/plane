
package com.server.plane.service.Projects;

import com.server.plane.entity.Projects;
import com.server.plane.entity.ProjectsExample;
import com.server.plane.mapper.ProjectsMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class ProjectsService extends BaseServiceImpl<Projects, ProjectsExample, Long, ProjectsMapper> {
    public ProjectsService(ProjectsMapper mapper) {
        super(mapper, Projects.class, ProjectsExample.class);
    }
}
