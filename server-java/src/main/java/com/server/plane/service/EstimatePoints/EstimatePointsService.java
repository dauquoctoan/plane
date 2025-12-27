
package com.server.plane.service.EstimatePoints;

import com.server.plane.entity.EstimatePoints;
import com.server.plane.entity.EstimatePointsExample;
import com.server.plane.mapper.EstimatePointsMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class EstimatePointsService extends BaseServiceImpl<EstimatePoints, EstimatePointsExample, Long, EstimatePointsMapper> {
    public EstimatePointsService(EstimatePointsMapper mapper) {
        super(mapper, EstimatePoints.class, EstimatePointsExample.class);
    }
}
