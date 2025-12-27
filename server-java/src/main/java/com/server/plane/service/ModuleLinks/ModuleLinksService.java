
package com.server.plane.service.ModuleLinks;

import com.server.plane.entity.ModuleLinks;
import com.server.plane.entity.ModuleLinksExample;
import com.server.plane.mapper.ModuleLinksMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class ModuleLinksService extends BaseServiceImpl<ModuleLinks, ModuleLinksExample, Long, ModuleLinksMapper> {
    public ModuleLinksService(ModuleLinksMapper mapper) {
        super(mapper, ModuleLinks.class, ModuleLinksExample.class);
    }
}
