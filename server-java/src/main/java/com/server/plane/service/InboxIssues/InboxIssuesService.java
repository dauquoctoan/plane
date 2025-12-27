
package com.server.plane.service.InboxIssues;

import com.server.plane.entity.InboxIssues;
import com.server.plane.entity.InboxIssuesExample;
import com.server.plane.mapper.InboxIssuesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class InboxIssuesService extends BaseServiceImpl<InboxIssues, InboxIssuesExample, Long, InboxIssuesMapper> {
    public InboxIssuesService(InboxIssuesMapper mapper) {
        super(mapper, InboxIssues.class, InboxIssuesExample.class);
    }
}
