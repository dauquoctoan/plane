
package com.server.plane.service.IssueActivities;

import com.server.plane.entity.IssueActivities;
import com.server.plane.entity.IssueActivitiesExample;
import com.server.plane.mapper.IssueActivitiesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class IssueActivitiesService extends BaseServiceImpl<IssueActivities, IssueActivitiesExample, Long, IssueActivitiesMapper> {
    public IssueActivitiesService(IssueActivitiesMapper mapper) {
        super(mapper, IssueActivities.class, IssueActivitiesExample.class);
    }
}
