
package com.server.plane.service.ModuleUserProperties;

import com.server.plane.entity.ModuleUserProperties;
import com.server.plane.entity.ModuleUserPropertiesExample;
import com.server.plane.mapper.ModuleUserPropertiesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class ModuleUserPropertiesService extends BaseServiceImpl<ModuleUserProperties, ModuleUserPropertiesExample, Long, ModuleUserPropertiesMapper> {
    public ModuleUserPropertiesService(ModuleUserPropertiesMapper mapper) {
        super(mapper, ModuleUserProperties.class, ModuleUserPropertiesExample.class);
    }
}
