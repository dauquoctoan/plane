
package com.server.plane.service.IssueReactions;

import com.server.plane.entity.IssueReactions;
import com.server.plane.entity.IssueReactionsExample;
import com.server.plane.mapper.IssueReactionsMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class IssueReactionsService extends BaseServiceImpl<IssueReactions, IssueReactionsExample, Long, IssueReactionsMapper> {
    public IssueReactionsService(IssueReactionsMapper mapper) {
        super(mapper, IssueReactions.class, IssueReactionsExample.class);
    }
}
