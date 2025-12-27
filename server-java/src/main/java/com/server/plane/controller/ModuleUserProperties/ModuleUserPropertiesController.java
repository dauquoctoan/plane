
package com.server.plane.controller.ModuleUserProperties;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.ModuleUserProperties.*;

@RestController
@RequestMapping("/api/moduleUserProperties")
@RequiredArgsConstructor
@Tag(name = "ModuleUserProperties")
public class ModuleUserPropertiesController {

    @PostMapping
    @Operation(summary = "Create moduleUserProperties")
    public ModuleUserPropertiesResponse create(
        @RequestBody ModuleUserPropertiesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update moduleUserProperties")
    public ModuleUserPropertiesResponse update(
        @PathVariable Long id,
        @RequestBody ModuleUserPropertiesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete moduleUserProperties")
    public void delete(
        @RequestBody ModuleUserPropertiesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id moduleUserProperties")
    public ModuleUserPropertiesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all moduleUserProperties")
    public List<ModuleUserPropertiesResponse> list() {
        return null;
    }
}
