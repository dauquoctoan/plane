
package com.server.plane.controller.ProjectMembers;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.ProjectMembers.*;

@RestController
@RequestMapping("/api/projectMembers")
@RequiredArgsConstructor
@Tag(name = "ProjectMembers")
public class ProjectMembersController {

    @PostMapping
    @Operation(summary = "Create projectMembers")
    public ProjectMembersResponse create(
        @RequestBody ProjectMembersCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update projectMembers")
    public ProjectMembersResponse update(
        @PathVariable Long id,
        @RequestBody ProjectMembersUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete projectMembers")
    public void delete(
        @RequestBody ProjectMembersDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id projectMembers")
    public ProjectMembersResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all projectMembers")
    public List<ProjectMembersResponse> list() {
        return null;
    }
}
