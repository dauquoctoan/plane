
package com.server.plane.service.Issue;

import com.server.plane.entity.Issue;
import com.server.plane.entity.IssueExample;
import com.server.plane.mapper.IssueMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class IssueService extends BaseServiceImpl<Issue, IssueExample, Long, IssueMapper> {
    public IssueService(IssueMapper mapper) {
        super(mapper, Issue.class, IssueExample.class);
    }
}
