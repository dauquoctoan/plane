
package com.server.plane.service.States;

import com.server.plane.entity.States;
import com.server.plane.entity.StatesExample;
import com.server.plane.mapper.StatesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class StatesService extends BaseServiceImpl<States, StatesExample, Long, StatesMapper> {
    public StatesService(StatesMapper mapper) {
        super(mapper, States.class, StatesExample.class);
    }
}
