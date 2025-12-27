
package com.server.plane.service.ExporterHistories;

import com.server.plane.entity.ExporterHistories;
import com.server.plane.entity.ExporterHistoriesExample;
import com.server.plane.mapper.ExporterHistoriesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class ExporterHistoriesService extends BaseServiceImpl<ExporterHistories, ExporterHistoriesExample, Long, ExporterHistoriesMapper> {
    public ExporterHistoriesService(ExporterHistoriesMapper mapper) {
        super(mapper, ExporterHistories.class, ExporterHistoriesExample.class);
    }
}
