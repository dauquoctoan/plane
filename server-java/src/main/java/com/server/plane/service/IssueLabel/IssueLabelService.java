
package com.server.plane.service.IssueLabel;

import com.server.plane.entity.IssueLabel;
import com.server.plane.entity.IssueLabelExample;
import com.server.plane.mapper.IssueLabelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class IssueLabelService extends BaseServiceImpl<IssueLabel, IssueLabelExample, Long, IssueLabelMapper> {
    public IssueLabelService(IssueLabelMapper mapper) {
        super(mapper, IssueLabel.class, IssueLabelExample.class);
    }
}
