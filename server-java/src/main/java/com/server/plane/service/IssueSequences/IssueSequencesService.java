
package com.server.plane.service.IssueSequences;

import com.server.plane.entity.IssueSequences;
import com.server.plane.entity.IssueSequencesExample;
import com.server.plane.mapper.IssueSequencesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class IssueSequencesService extends BaseServiceImpl<IssueSequences, IssueSequencesExample, Long, IssueSequencesMapper> {
    public IssueSequencesService(IssueSequencesMapper mapper) {
        super(mapper, IssueSequences.class, IssueSequencesExample.class);
    }
}
