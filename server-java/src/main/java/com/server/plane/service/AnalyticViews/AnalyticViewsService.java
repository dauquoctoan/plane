
package com.server.plane.service.AnalyticViews;

import com.server.plane.entity.AnalyticViews;
import com.server.plane.entity.AnalyticViewsExample;
import com.server.plane.mapper.AnalyticViewsMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class AnalyticViewsService extends BaseServiceImpl<AnalyticViews, AnalyticViewsExample, Long, AnalyticViewsMapper> {
    public AnalyticViewsService(AnalyticViewsMapper mapper) {
        super(mapper, AnalyticViews.class, AnalyticViewsExample.class);
    }
}
