
package com.server.plane.service.CycleIssues;

import com.server.plane.entity.CycleIssues;
import com.server.plane.entity.CycleIssuesExample;
import com.server.plane.mapper.CycleIssuesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class CycleIssuesService extends BaseServiceImpl<CycleIssues, CycleIssuesExample, Long, CycleIssuesMapper> {
    public CycleIssuesService(CycleIssuesMapper mapper) {
        super(mapper, CycleIssues.class, CycleIssuesExample.class);
    }
}
