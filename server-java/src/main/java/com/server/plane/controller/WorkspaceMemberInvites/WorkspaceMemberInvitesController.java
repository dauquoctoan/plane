
package com.server.plane.controller.WorkspaceMemberInvites;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.WorkspaceMemberInvites.*;

@RestController
@RequestMapping("/api/workspaceMemberInvites")
@RequiredArgsConstructor
@Tag(name = "WorkspaceMemberInvites")
public class WorkspaceMemberInvitesController {

    @PostMapping
    @Operation(summary = "Create workspaceMemberInvites")
    public WorkspaceMemberInvitesResponse create(
        @RequestBody WorkspaceMemberInvitesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update workspaceMemberInvites")
    public WorkspaceMemberInvitesResponse update(
        @PathVariable Long id,
        @RequestBody WorkspaceMemberInvitesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete workspaceMemberInvites")
    public void delete(
        @RequestBody WorkspaceMemberInvitesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id workspaceMemberInvites")
    public WorkspaceMemberInvitesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all workspaceMemberInvites")
    public List<WorkspaceMemberInvitesResponse> list() {
        return null;
    }
}
