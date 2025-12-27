
package com.server.plane.service.Users;

import com.server.plane.entity.Users;
import com.server.plane.entity.UsersExample;
import com.server.plane.mapper.UsersMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class UsersService extends BaseServiceImpl<Users, UsersExample, Long, UsersMapper> {
    public UsersService(UsersMapper mapper) {
        super(mapper, Users.class, UsersExample.class);
    }
}
