
package com.server.plane.service.FlywaySchemaHistory;

import com.server.plane.entity.FlywaySchemaHistory;
import com.server.plane.entity.FlywaySchemaHistoryExample;
import com.server.plane.mapper.FlywaySchemaHistoryMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class FlywaySchemaHistoryService extends BaseServiceImpl<FlywaySchemaHistory, FlywaySchemaHistoryExample, Long, FlywaySchemaHistoryMapper> {
    public FlywaySchemaHistoryService(FlywaySchemaHistoryMapper mapper) {
        super(mapper, FlywaySchemaHistory.class, FlywaySchemaHistoryExample.class);
    }
}
