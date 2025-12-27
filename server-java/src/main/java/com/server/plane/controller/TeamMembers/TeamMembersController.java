
package com.server.plane.controller.TeamMembers;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.TeamMembers.*;

@RestController
@RequestMapping("/api/teamMembers")
@RequiredArgsConstructor
@Tag(name = "TeamMembers")
public class TeamMembersController {

    @PostMapping
    @Operation(summary = "Create teamMembers")
    public TeamMembersResponse create(
        @RequestBody TeamMembersCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update teamMembers")
    public TeamMembersResponse update(
        @PathVariable Long id,
        @RequestBody TeamMembersUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete teamMembers")
    public void delete(
        @RequestBody TeamMembersDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id teamMembers")
    public TeamMembersResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all teamMembers")
    public List<TeamMembersResponse> list() {
        return null;
    }
}
