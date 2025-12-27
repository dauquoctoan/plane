
package com.server.plane.controller.WorkspaceMembers;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.WorkspaceMembers.*;

@RestController
@RequestMapping("/api/workspaceMembers")
@RequiredArgsConstructor
@Tag(name = "WorkspaceMembers")
public class WorkspaceMembersController {

    @PostMapping
    @Operation(summary = "Create workspaceMembers")
    public WorkspaceMembersResponse create(
        @RequestBody WorkspaceMembersCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update workspaceMembers")
    public WorkspaceMembersResponse update(
        @PathVariable Long id,
        @RequestBody WorkspaceMembersUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete workspaceMembers")
    public void delete(
        @RequestBody WorkspaceMembersDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id workspaceMembers")
    public WorkspaceMembersResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all workspaceMembers")
    public List<WorkspaceMembersResponse> list() {
        return null;
    }
}
