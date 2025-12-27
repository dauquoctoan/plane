
package com.server.plane.service.CommentReaction;

import com.server.plane.entity.CommentReaction;
import com.server.plane.entity.CommentReactionExample;
import com.server.plane.mapper.CommentReactionMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class CommentReactionService extends BaseServiceImpl<CommentReaction, CommentReactionExample, Long, CommentReactionMapper> {
    public CommentReactionService(CommentReactionMapper mapper) {
        super(mapper, CommentReaction.class, CommentReactionExample.class);
    }
}
