
package com.server.plane.controller.FlywaySchemaHistory;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.FlywaySchemaHistory.*;

@RestController
@RequestMapping("/api/flywaySchemaHistory")
@RequiredArgsConstructor
@Tag(name = "FlywaySchemaHistory")
public class FlywaySchemaHistoryController {

    @PostMapping
    @Operation(summary = "Create flywaySchemaHistory")
    public FlywaySchemaHistoryResponse create(
        @RequestBody FlywaySchemaHistoryCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update flywaySchemaHistory")
    public FlywaySchemaHistoryResponse update(
        @PathVariable Long id,
        @RequestBody FlywaySchemaHistoryUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete flywaySchemaHistory")
    public void delete(
        @RequestBody FlywaySchemaHistoryDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id flywaySchemaHistory")
    public FlywaySchemaHistoryResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all flywaySchemaHistory")
    public List<FlywaySchemaHistoryResponse> list() {
        return null;
    }
}
