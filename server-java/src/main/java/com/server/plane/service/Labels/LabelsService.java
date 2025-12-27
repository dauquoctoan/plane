
package com.server.plane.service.Labels;

import com.server.plane.entity.Labels;
import com.server.plane.entity.LabelsExample;
import com.server.plane.mapper.LabelsMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class LabelsService extends BaseServiceImpl<Labels, LabelsExample, Long, LabelsMapper> {
    public LabelsService(LabelsMapper mapper) {
        super(mapper, Labels.class, LabelsExample.class);
    }
}
