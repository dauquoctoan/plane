
package com.server.plane.service.GlobalViews;

import com.server.plane.entity.GlobalViews;
import com.server.plane.entity.GlobalViewsExample;
import com.server.plane.mapper.GlobalViewsMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class GlobalViewsService extends BaseServiceImpl<GlobalViews, GlobalViewsExample, Long, GlobalViewsMapper> {
    public GlobalViewsService(GlobalViewsMapper mapper) {
        super(mapper, GlobalViews.class, GlobalViewsExample.class);
    }
}
