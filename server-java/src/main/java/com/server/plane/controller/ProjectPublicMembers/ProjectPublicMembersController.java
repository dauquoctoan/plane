
package com.server.plane.controller.ProjectPublicMembers;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.ProjectPublicMembers.*;

@RestController
@RequestMapping("/api/projectPublicMembers")
@RequiredArgsConstructor
@Tag(name = "ProjectPublicMembers")
public class ProjectPublicMembersController {

    @PostMapping
    @Operation(summary = "Create projectPublicMembers")
    public ProjectPublicMembersResponse create(
        @RequestBody ProjectPublicMembersCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update projectPublicMembers")
    public ProjectPublicMembersResponse update(
        @PathVariable Long id,
        @RequestBody ProjectPublicMembersUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete projectPublicMembers")
    public void delete(
        @RequestBody ProjectPublicMembersDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id projectPublicMembers")
    public ProjectPublicMembersResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all projectPublicMembers")
    public List<ProjectPublicMembersResponse> list() {
        return null;
    }
}
