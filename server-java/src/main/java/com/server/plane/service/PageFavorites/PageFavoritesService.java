
package com.server.plane.service.PageFavorites;

import com.server.plane.entity.PageFavorites;
import com.server.plane.entity.PageFavoritesExample;
import com.server.plane.mapper.PageFavoritesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class PageFavoritesService extends BaseServiceImpl<PageFavorites, PageFavoritesExample, Long, PageFavoritesMapper> {
    public PageFavoritesService(PageFavoritesMapper mapper) {
        super(mapper, PageFavorites.class, PageFavoritesExample.class);
    }
}
