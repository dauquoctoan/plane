package com.server.plane.constants;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Map;

@Component
public class DefaultConfigLoader {

    private final ObjectMapper objectMapper;

    public DefaultConfigLoader(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public Map<String, Object> load(String name) throws IOException {
        return objectMapper.readValue(
                new ClassPathResource("defaults/" + name + ".json").getInputStream(),
                new TypeReference<>() {}
        );
    }
}