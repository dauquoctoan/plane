
package com.server.plane.controller.ExporterHistories;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.ExporterHistories.*;

@RestController
@RequestMapping("/api/exporterHistories")
@RequiredArgsConstructor
@Tag(name = "ExporterHistories")
public class ExporterHistoriesController {

    @PostMapping
    @Operation(summary = "Create exporterHistories")
    public ExporterHistoriesResponse create(
        @RequestBody ExporterHistoriesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update exporterHistories")
    public ExporterHistoriesResponse update(
        @PathVariable Long id,
        @RequestBody ExporterHistoriesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete exporterHistories")
    public void delete(
        @RequestBody ExporterHistoriesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id exporterHistories")
    public ExporterHistoriesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all exporterHistories")
    public List<ExporterHistoriesResponse> list() {
        return null;
    }
}
