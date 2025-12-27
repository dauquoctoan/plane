
package com.server.plane.service.IssueRelations;

import com.server.plane.entity.IssueRelations;
import com.server.plane.entity.IssueRelationsExample;
import com.server.plane.mapper.IssueRelationsMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class IssueRelationsService extends BaseServiceImpl<IssueRelations, IssueRelationsExample, Long, IssueRelationsMapper> {
    public IssueRelationsService(IssueRelationsMapper mapper) {
        super(mapper, IssueRelations.class, IssueRelationsExample.class);
    }
}
