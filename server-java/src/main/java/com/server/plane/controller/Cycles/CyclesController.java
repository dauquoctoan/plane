
package com.server.plane.controller.Cycles;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.Cycles.*;

@RestController
@RequestMapping("/api/cycles")
@RequiredArgsConstructor
@Tag(name = "Cycles")
public class CyclesController {

    @PostMapping
    @Operation(summary = "Create cycles")
    public CyclesResponse create(
        @RequestBody CyclesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update cycles")
    public CyclesResponse update(
        @PathVariable Long id,
        @RequestBody CyclesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete cycles")
    public void delete(
        @RequestBody CyclesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id cycles")
    public CyclesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all cycles")
    public List<CyclesResponse> list() {
        return null;
    }
}
