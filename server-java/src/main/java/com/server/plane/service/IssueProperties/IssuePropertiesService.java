
package com.server.plane.service.IssueProperties;

import com.server.plane.entity.IssueProperties;
import com.server.plane.entity.IssuePropertiesExample;
import com.server.plane.mapper.IssuePropertiesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class IssuePropertiesService extends BaseServiceImpl<IssueProperties, IssuePropertiesExample, Long, IssuePropertiesMapper> {
    public IssuePropertiesService(IssuePropertiesMapper mapper) {
        super(mapper, IssueProperties.class, IssuePropertiesExample.class);
    }
}
