
package com.server.plane.controller.ProjectMemberInvites;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.ProjectMemberInvites.*;

@RestController
@RequestMapping("/api/projectMemberInvites")
@RequiredArgsConstructor
@Tag(name = "ProjectMemberInvites")
public class ProjectMemberInvitesController {

    @PostMapping
    @Operation(summary = "Create projectMemberInvites")
    public ProjectMemberInvitesResponse create(
        @RequestBody ProjectMemberInvitesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update projectMemberInvites")
    public ProjectMemberInvitesResponse update(
        @PathVariable Long id,
        @RequestBody ProjectMemberInvitesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete projectMemberInvites")
    public void delete(
        @RequestBody ProjectMemberInvitesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id projectMemberInvites")
    public ProjectMemberInvitesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all projectMemberInvites")
    public List<ProjectMemberInvitesResponse> list() {
        return null;
    }
}
