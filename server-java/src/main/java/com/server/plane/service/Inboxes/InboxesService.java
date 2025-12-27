
package com.server.plane.service.Inboxes;

import com.server.plane.entity.Inboxes;
import com.server.plane.entity.InboxesExample;
import com.server.plane.mapper.InboxesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class InboxesService extends BaseServiceImpl<Inboxes, InboxesExample, Long, InboxesMapper> {
    public InboxesService(InboxesMapper mapper) {
        super(mapper, Inboxes.class, InboxesExample.class);
    }
}
