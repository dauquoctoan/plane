
package com.server.plane.service.IssueViews;

import com.server.plane.entity.IssueViews;
import com.server.plane.entity.IssueViewsExample;
import com.server.plane.mapper.IssueViewsMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class IssueViewsService extends BaseServiceImpl<IssueViews, IssueViewsExample, Long, IssueViewsMapper> {
    public IssueViewsService(IssueViewsMapper mapper) {
        super(mapper, IssueViews.class, IssueViewsExample.class);
    }
}
