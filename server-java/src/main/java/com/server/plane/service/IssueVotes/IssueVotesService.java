
package com.server.plane.service.IssueVotes;

import com.server.plane.entity.IssueVotes;
import com.server.plane.entity.IssueVotesExample;
import com.server.plane.mapper.IssueVotesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class IssueVotesService extends BaseServiceImpl<IssueVotes, IssueVotesExample, Long, IssueVotesMapper> {
    public IssueVotesService(IssueVotesMapper mapper) {
        super(mapper, IssueVotes.class, IssueVotesExample.class);
    }
}
