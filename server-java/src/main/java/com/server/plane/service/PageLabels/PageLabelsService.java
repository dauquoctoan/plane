
package com.server.plane.service.PageLabels;

import com.server.plane.entity.PageLabels;
import com.server.plane.entity.PageLabelsExample;
import com.server.plane.mapper.PageLabelsMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class PageLabelsService extends BaseServiceImpl<PageLabels, PageLabelsExample, Long, PageLabelsMapper> {
    public PageLabelsService(PageLabelsMapper mapper) {
        super(mapper, PageLabels.class, PageLabelsExample.class);
    }
}
