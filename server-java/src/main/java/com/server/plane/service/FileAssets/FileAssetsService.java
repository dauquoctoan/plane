
package com.server.plane.service.FileAssets;

import com.server.plane.entity.FileAssets;
import com.server.plane.entity.FileAssetsExample;
import com.server.plane.mapper.FileAssetsMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class FileAssetsService extends BaseServiceImpl<FileAssets, FileAssetsExample, Long, FileAssetsMapper> {
    public FileAssetsService(FileAssetsMapper mapper) {
        super(mapper, FileAssets.class, FileAssetsExample.class);
    }
}
