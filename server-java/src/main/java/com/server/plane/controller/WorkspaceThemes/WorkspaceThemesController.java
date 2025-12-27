
package com.server.plane.controller.WorkspaceThemes;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.WorkspaceThemes.*;

@RestController
@RequestMapping("/api/workspaceThemes")
@RequiredArgsConstructor
@Tag(name = "WorkspaceThemes")
public class WorkspaceThemesController {

    @PostMapping
    @Operation(summary = "Create workspaceThemes")
    public WorkspaceThemesResponse create(
        @RequestBody WorkspaceThemesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update workspaceThemes")
    public WorkspaceThemesResponse update(
        @PathVariable Long id,
        @RequestBody WorkspaceThemesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete workspaceThemes")
    public void delete(
        @RequestBody WorkspaceThemesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id workspaceThemes")
    public WorkspaceThemesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all workspaceThemes")
    public List<WorkspaceThemesResponse> list() {
        return null;
    }
}
