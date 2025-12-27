
package com.server.plane.service.CycleFavorites;

import com.server.plane.entity.CycleFavorites;
import com.server.plane.entity.CycleFavoritesExample;
import com.server.plane.mapper.CycleFavoritesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class CycleFavoritesService extends BaseServiceImpl<CycleFavorites, CycleFavoritesExample, Long, CycleFavoritesMapper> {
    public CycleFavoritesService(CycleFavoritesMapper mapper) {
        super(mapper, CycleFavorites.class, CycleFavoritesExample.class);
    }
}
