
package com.server.plane.service.Cycles;

import com.server.plane.entity.Cycles;
import com.server.plane.entity.CyclesExample;
import com.server.plane.mapper.CyclesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class CyclesService extends BaseServiceImpl<Cycles, CyclesExample, Long, CyclesMapper> {
    public CyclesService(CyclesMapper mapper) {
        super(mapper, Cycles.class, CyclesExample.class);
    }
}
