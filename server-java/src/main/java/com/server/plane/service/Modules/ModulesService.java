
package com.server.plane.service.Modules;

import com.server.plane.entity.Modules;
import com.server.plane.entity.ModulesExample;
import com.server.plane.mapper.ModulesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class ModulesService extends BaseServiceImpl<Modules, ModulesExample, Long, ModulesMapper> {
    public ModulesService(ModulesMapper mapper) {
        super(mapper, Modules.class, ModulesExample.class);
    }
}
