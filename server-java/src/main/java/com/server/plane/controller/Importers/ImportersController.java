
package com.server.plane.controller.Importers;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.Importers.*;

@RestController
@RequestMapping("/api/importers")
@RequiredArgsConstructor
@Tag(name = "Importers")
public class ImportersController {

    @PostMapping
    @Operation(summary = "Create importers")
    public ImportersResponse create(
        @RequestBody ImportersCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update importers")
    public ImportersResponse update(
        @PathVariable Long id,
        @RequestBody ImportersUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete importers")
    public void delete(
        @RequestBody ImportersDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id importers")
    public ImportersResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all importers")
    public List<ImportersResponse> list() {
        return null;
    }
}
