
package com.server.plane.service.ProjectDeployBoards;

import com.server.plane.entity.ProjectDeployBoards;
import com.server.plane.entity.ProjectDeployBoardsExample;
import com.server.plane.mapper.ProjectDeployBoardsMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class ProjectDeployBoardsService extends BaseServiceImpl<ProjectDeployBoards, ProjectDeployBoardsExample, Long, ProjectDeployBoardsMapper> {
    public ProjectDeployBoardsService(ProjectDeployBoardsMapper mapper) {
        super(mapper, ProjectDeployBoards.class, ProjectDeployBoardsExample.class);
    }
}
