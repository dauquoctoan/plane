
package com.server.plane.service.Pages;

import com.server.plane.entity.Pages;
import com.server.plane.entity.PagesExample;
import com.server.plane.mapper.PagesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class PagesService extends BaseServiceImpl<Pages, PagesExample, Long, PagesMapper> {
    public PagesService(PagesMapper mapper) {
        super(mapper, Pages.class, PagesExample.class);
    }
}
