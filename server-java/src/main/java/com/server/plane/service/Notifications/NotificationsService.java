
package com.server.plane.service.Notifications;

import com.server.plane.entity.Notifications;
import com.server.plane.entity.NotificationsExample;
import com.server.plane.mapper.NotificationsMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.server.plane.base.BaseServiceImpl;

@Service
@Transactional
public class NotificationsService extends BaseServiceImpl<Notifications, NotificationsExample, Long, NotificationsMapper> {
    public NotificationsService(NotificationsMapper mapper) {
        super(mapper, Notifications.class, NotificationsExample.class);
    }
}
