
package com.server.plane.service.ModuleMembers;

import com.server.plane.entity.ModuleMembers;
import com.server.plane.entity.ModuleMembersExample;
import com.server.plane.mapper.ModuleMembersMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class ModuleMembersService extends BaseServiceImpl<ModuleMembers, ModuleMembersExample, Long, ModuleMembersMapper> {
    public ModuleMembersService(ModuleMembersMapper mapper) {
        super(mapper, ModuleMembers.class, ModuleMembersExample.class);
    }
}
