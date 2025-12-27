
package com.server.plane.service.IssueLinks;

import com.server.plane.entity.IssueLinks;
import com.server.plane.entity.IssueLinksExample;
import com.server.plane.mapper.IssueLinksMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class IssueLinksService extends BaseServiceImpl<IssueLinks, IssueLinksExample, Long, IssueLinksMapper> {
    public IssueLinksService(IssueLinksMapper mapper) {
        super(mapper, IssueLinks.class, IssueLinksExample.class);
    }
}
