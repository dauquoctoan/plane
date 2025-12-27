
package com.server.plane.service.ModuleFavorites;

import com.server.plane.entity.ModuleFavorites;
import com.server.plane.entity.ModuleFavoritesExample;
import com.server.plane.mapper.ModuleFavoritesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class ModuleFavoritesService extends BaseServiceImpl<ModuleFavorites, ModuleFavoritesExample, Long, ModuleFavoritesMapper> {
    public ModuleFavoritesService(ModuleFavoritesMapper mapper) {
        super(mapper, ModuleFavorites.class, ModuleFavoritesExample.class);
    }
}
