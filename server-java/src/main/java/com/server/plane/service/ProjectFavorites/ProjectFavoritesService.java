
package com.server.plane.service.ProjectFavorites;

import com.server.plane.entity.ProjectFavorites;
import com.server.plane.entity.ProjectFavoritesExample;
import com.server.plane.mapper.ProjectFavoritesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class ProjectFavoritesService extends BaseServiceImpl<ProjectFavorites, ProjectFavoritesExample, Long, ProjectFavoritesMapper> {
    public ProjectFavoritesService(ProjectFavoritesMapper mapper) {
        super(mapper, ProjectFavorites.class, ProjectFavoritesExample.class);
    }
}
