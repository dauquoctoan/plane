
package com.server.plane.service.CycleUserProperties;

import com.server.plane.entity.CycleUserProperties;
import com.server.plane.entity.CycleUserPropertiesExample;
import com.server.plane.mapper.CycleUserPropertiesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class CycleUserPropertiesService extends BaseServiceImpl<CycleUserProperties, CycleUserPropertiesExample, Long, CycleUserPropertiesMapper> {
    public CycleUserPropertiesService(CycleUserPropertiesMapper mapper) {
        super(mapper, CycleUserProperties.class, CycleUserPropertiesExample.class);
    }
}
