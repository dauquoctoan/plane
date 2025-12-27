
package com.server.plane.service.Estimates;

import com.server.plane.entity.Estimates;
import com.server.plane.entity.EstimatesExample;
import com.server.plane.mapper.EstimatesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class EstimatesService extends BaseServiceImpl<Estimates, EstimatesExample, Long, EstimatesMapper> {
    public EstimatesService(EstimatesMapper mapper) {
        super(mapper, Estimates.class, EstimatesExample.class);
    }
}
