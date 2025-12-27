
package com.server.plane.service.Importers;

import com.server.plane.entity.Importers;
import com.server.plane.entity.ImportersExample;
import com.server.plane.mapper.ImportersMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class ImportersService extends BaseServiceImpl<Importers, ImportersExample, Long, ImportersMapper> {
    public ImportersService(ImportersMapper mapper) {
        super(mapper, Importers.class, ImportersExample.class);
    }
}
