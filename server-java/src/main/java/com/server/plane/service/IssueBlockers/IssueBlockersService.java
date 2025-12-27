
package com.server.plane.service.IssueBlockers;

import com.server.plane.entity.IssueBlockers;
import com.server.plane.entity.IssueBlockersExample;
import com.server.plane.mapper.IssueBlockersMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class IssueBlockersService extends BaseServiceImpl<IssueBlockers, IssueBlockersExample, Long, IssueBlockersMapper> {
    public IssueBlockersService(IssueBlockersMapper mapper) {
        super(mapper, IssueBlockers.class, IssueBlockersExample.class);
    }
}
