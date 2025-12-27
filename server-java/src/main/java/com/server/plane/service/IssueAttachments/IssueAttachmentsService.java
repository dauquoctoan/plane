
package com.server.plane.service.IssueAttachments;

import com.server.plane.entity.IssueAttachments;
import com.server.plane.entity.IssueAttachmentsExample;
import com.server.plane.mapper.IssueAttachmentsMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class IssueAttachmentsService extends BaseServiceImpl<IssueAttachments, IssueAttachmentsExample, Long, IssueAttachmentsMapper> {
    public IssueAttachmentsService(IssueAttachmentsMapper mapper) {
        super(mapper, IssueAttachments.class, IssueAttachmentsExample.class);
    }
}
