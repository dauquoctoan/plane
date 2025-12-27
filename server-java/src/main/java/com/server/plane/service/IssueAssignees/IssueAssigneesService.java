
package com.server.plane.service.IssueAssignees;

import com.server.plane.entity.IssueAssignees;
import com.server.plane.entity.IssueAssigneesExample;
import com.server.plane.mapper.IssueAssigneesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class IssueAssigneesService extends BaseServiceImpl<IssueAssignees, IssueAssigneesExample, Long, IssueAssigneesMapper> {
    public IssueAssigneesService(IssueAssigneesMapper mapper) {
        super(mapper, IssueAssignees.class, IssueAssigneesExample.class);
    }
}
