
package com.server.plane.service.IssueComments;

import com.server.plane.entity.IssueComments;
import com.server.plane.entity.IssueCommentsExample;
import com.server.plane.mapper.IssueCommentsMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class IssueCommentsService extends BaseServiceImpl<IssueComments, IssueCommentsExample, Long, IssueCommentsMapper> {
    public IssueCommentsService(IssueCommentsMapper mapper) {
        super(mapper, IssueComments.class, IssueCommentsExample.class);
    }
}
