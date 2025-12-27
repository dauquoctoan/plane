
package com.server.plane.service.ProjectViews;

import com.server.plane.entity.ProjectViews;
import com.server.plane.entity.ProjectViewsExample;
import com.server.plane.mapper.ProjectViewsMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class ProjectViewsService extends BaseServiceImpl<ProjectViews, ProjectViewsExample, Long, ProjectViewsMapper> {
    public ProjectViewsService(ProjectViewsMapper mapper) {
        super(mapper, ProjectViews.class, ProjectViewsExample.class);
    }
}
