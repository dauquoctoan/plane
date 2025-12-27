const { toCamel, sqlToJava } = require('./utils');
const config = require('./config');

function genService(entity) {
return `
package com.server.plane.service.${entity};

import com.server.plane.entity.${entity};
import com.server.plane.entity.${entity}Example;
import com.server.plane.mapper.${entity}Mapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class ${entity}Service extends BaseServiceImpl<${entity}, ${entity}Example, Long, ${entity}Mapper> {
    public ${entity}Service(${entity}Mapper mapper) {
        super(mapper, ${entity}.class, ${entity}Example.class);
    }
}
`;
}

module.exports = { genService };
