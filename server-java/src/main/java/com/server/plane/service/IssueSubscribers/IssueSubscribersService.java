
package com.server.plane.service.IssueSubscribers;

import com.server.plane.entity.IssueSubscribers;
import com.server.plane.entity.IssueSubscribersExample;
import com.server.plane.mapper.IssueSubscribersMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class IssueSubscribersService extends BaseServiceImpl<IssueSubscribers, IssueSubscribersExample, Long, IssueSubscribersMapper> {
    public IssueSubscribersService(IssueSubscribersMapper mapper) {
        super(mapper, IssueSubscribers.class, IssueSubscribersExample.class);
    }
}
