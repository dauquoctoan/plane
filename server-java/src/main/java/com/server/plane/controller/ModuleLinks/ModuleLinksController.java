
package com.server.plane.controller.ModuleLinks;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.ModuleLinks.*;

@RestController
@RequestMapping("/api/moduleLinks")
@RequiredArgsConstructor
@Tag(name = "ModuleLinks")
public class ModuleLinksController {

    @PostMapping
    @Operation(summary = "Create moduleLinks")
    public ModuleLinksResponse create(
        @RequestBody ModuleLinksCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update moduleLinks")
    public ModuleLinksResponse update(
        @PathVariable Long id,
        @RequestBody ModuleLinksUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete moduleLinks")
    public void delete(
        @RequestBody ModuleLinksDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id moduleLinks")
    public ModuleLinksResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all moduleLinks")
    public List<ModuleLinksResponse> list() {
        return null;
    }
}
