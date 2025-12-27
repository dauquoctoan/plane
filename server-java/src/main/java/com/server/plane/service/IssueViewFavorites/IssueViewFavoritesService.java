
package com.server.plane.service.IssueViewFavorites;

import com.server.plane.entity.IssueViewFavorites;
import com.server.plane.entity.IssueViewFavoritesExample;
import com.server.plane.mapper.IssueViewFavoritesMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class IssueViewFavoritesService extends BaseServiceImpl<IssueViewFavorites, IssueViewFavoritesExample, Long, IssueViewFavoritesMapper> {
    public IssueViewFavoritesService(IssueViewFavoritesMapper mapper) {
        super(mapper, IssueViewFavorites.class, IssueViewFavoritesExample.class);
    }
}
