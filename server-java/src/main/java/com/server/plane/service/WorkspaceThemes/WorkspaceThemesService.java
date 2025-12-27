
package com.server.plane.service.WorkspaceThemes;

import com.server.plane.entity.WorkspaceThemes;
import com.server.plane.entity.WorkspaceThemesExample;
import com.server.plane.mapper.WorkspaceThemesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class WorkspaceThemesService extends BaseServiceImpl<WorkspaceThemes, WorkspaceThemesExample, Long, WorkspaceThemesMapper> {
    public WorkspaceThemesService(WorkspaceThemesMapper mapper) {
        super(mapper, WorkspaceThemes.class, WorkspaceThemesExample.class);
    }
}
