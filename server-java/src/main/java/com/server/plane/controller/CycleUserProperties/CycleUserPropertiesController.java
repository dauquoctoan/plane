
package com.server.plane.controller.CycleUserProperties;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.CycleUserProperties.*;

@RestController
@RequestMapping("/api/cycleUserProperties")
@RequiredArgsConstructor
@Tag(name = "CycleUserProperties")
public class CycleUserPropertiesController {

    @PostMapping
    @Operation(summary = "Create cycleUserProperties")
    public CycleUserPropertiesResponse create(
        @RequestBody CycleUserPropertiesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update cycleUserProperties")
    public CycleUserPropertiesResponse update(
        @PathVariable Long id,
        @RequestBody CycleUserPropertiesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete cycleUserProperties")
    public void delete(
        @RequestBody CycleUserPropertiesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id cycleUserProperties")
    public CycleUserPropertiesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all cycleUserProperties")
    public List<CycleUserPropertiesResponse> list() {
        return null;
    }
}
