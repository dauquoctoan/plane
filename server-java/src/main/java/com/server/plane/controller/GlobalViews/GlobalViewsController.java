
package com.server.plane.controller.GlobalViews;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.GlobalViews.*;

@RestController
@RequestMapping("/api/globalViews")
@RequiredArgsConstructor
@Tag(name = "GlobalViews")
public class GlobalViewsController {

    @PostMapping
    @Operation(summary = "Create globalViews")
    public GlobalViewsResponse create(
        @RequestBody GlobalViewsCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update globalViews")
    public GlobalViewsResponse update(
        @PathVariable Long id,
        @RequestBody GlobalViewsUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete globalViews")
    public void delete(
        @RequestBody GlobalViewsDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id globalViews")
    public GlobalViewsResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all globalViews")
    public List<GlobalViewsResponse> list() {
        return null;
    }
}
