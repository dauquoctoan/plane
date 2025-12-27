
package com.server.plane.service.ModuleIssues;

import com.server.plane.entity.ModuleIssues;
import com.server.plane.entity.ModuleIssuesExample;
import com.server.plane.mapper.ModuleIssuesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class ModuleIssuesService extends BaseServiceImpl<ModuleIssues, ModuleIssuesExample, Long, ModuleIssuesMapper> {
    public ModuleIssuesService(ModuleIssuesMapper mapper) {
        super(mapper, ModuleIssues.class, ModuleIssuesExample.class);
    }
}
