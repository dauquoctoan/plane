
package com.server.plane.service.ApiTokens;

import com.server.plane.entity.ApiTokens;
import com.server.plane.entity.ApiTokensExample;
import com.server.plane.mapper.ApiTokensMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class ApiTokensService extends BaseServiceImpl<ApiTokens, ApiTokensExample, Long, ApiTokensMapper> {
    public ApiTokensService(ApiTokensMapper mapper) {
        super(mapper, ApiTokens.class, ApiTokensExample.class);
    }
}
