
package com.server.plane.controller.Workspaces;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.Workspaces.*;

@RestController
@RequestMapping("/api/workspaces")
@RequiredArgsConstructor
@Tag(name = "Workspaces")
public class WorkspacesController {

    @PostMapping
    @Operation(summary = "Create workspaces")
    public WorkspacesResponse create(
        @RequestBody WorkspacesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update workspaces")
    public WorkspacesResponse update(
        @PathVariable Long id,
        @RequestBody WorkspacesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete workspaces")
    public void delete(
        @RequestBody WorkspacesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id workspaces")
    public WorkspacesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all workspaces")
    public List<WorkspacesResponse> list() {
        return null;
    }
}
