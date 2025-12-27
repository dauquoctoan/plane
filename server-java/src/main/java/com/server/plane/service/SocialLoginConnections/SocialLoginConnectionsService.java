
package com.server.plane.service.SocialLoginConnections;

import com.server.plane.entity.SocialLoginConnections;
import com.server.plane.entity.SocialLoginConnectionsExample;
import com.server.plane.mapper.SocialLoginConnectionsMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class SocialLoginConnectionsService extends BaseServiceImpl<SocialLoginConnections, SocialLoginConnectionsExample, Long, SocialLoginConnectionsMapper> {
    public SocialLoginConnectionsService(SocialLoginConnectionsMapper mapper) {
        super(mapper, SocialLoginConnections.class, SocialLoginConnectionsExample.class);
    }
}
