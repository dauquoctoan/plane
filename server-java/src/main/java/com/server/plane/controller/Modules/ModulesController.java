
package com.server.plane.controller.Modules;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.Modules.*;

@RestController
@RequestMapping("/api/modules")
@RequiredArgsConstructor
@Tag(name = "Modules")
public class ModulesController {

    @PostMapping
    @Operation(summary = "Create modules")
    public ModulesResponse create(
        @RequestBody ModulesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update modules")
    public ModulesResponse update(
        @PathVariable Long id,
        @RequestBody ModulesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete modules")
    public void delete(
        @RequestBody ModulesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id modules")
    public ModulesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all modules")
    public List<ModulesResponse> list() {
        return null;
    }
}
