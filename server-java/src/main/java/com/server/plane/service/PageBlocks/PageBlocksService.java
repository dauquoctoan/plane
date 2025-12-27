
package com.server.plane.service.PageBlocks;

import com.server.plane.entity.PageBlocks;
import com.server.plane.entity.PageBlocksExample;
import com.server.plane.mapper.PageBlocksMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class PageBlocksService extends BaseServiceImpl<PageBlocks, PageBlocksExample, Long, PageBlocksMapper> {
    public PageBlocksService(PageBlocksMapper mapper) {
        super(mapper, PageBlocks.class, PageBlocksExample.class);
    }
}
