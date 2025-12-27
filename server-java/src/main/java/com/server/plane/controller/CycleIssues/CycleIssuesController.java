
package com.server.plane.controller.CycleIssues;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.CycleIssues.*;

@RestController
@RequestMapping("/api/cycleIssues")
@RequiredArgsConstructor
@Tag(name = "CycleIssues")
public class CycleIssuesController {

    @PostMapping
    @Operation(summary = "Create cycleIssues")
    public CycleIssuesResponse create(
        @RequestBody CycleIssuesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update cycleIssues")
    public CycleIssuesResponse update(
        @PathVariable Long id,
        @RequestBody CycleIssuesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete cycleIssues")
    public void delete(
        @RequestBody CycleIssuesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id cycleIssues")
    public CycleIssuesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all cycleIssues")
    public List<CycleIssuesResponse> list() {
        return null;
    }
}
