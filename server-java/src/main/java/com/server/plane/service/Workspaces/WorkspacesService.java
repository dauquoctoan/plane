
package com.server.plane.service.Workspaces;

import com.server.plane.entity.Workspaces;
import com.server.plane.entity.WorkspacesExample;
import com.server.plane.mapper.WorkspacesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class WorkspacesService extends BaseServiceImpl<Workspaces, WorkspacesExample, Long, WorkspacesMapper> {
    public WorkspacesService(WorkspacesMapper mapper) {
        super(mapper, Workspaces.class, WorkspacesExample.class);
    }
}
