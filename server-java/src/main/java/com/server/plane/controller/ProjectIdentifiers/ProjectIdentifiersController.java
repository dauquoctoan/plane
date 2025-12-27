
package com.server.plane.controller.ProjectIdentifiers;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.ProjectIdentifiers.*;

@RestController
@RequestMapping("/api/projectIdentifiers")
@RequiredArgsConstructor
@Tag(name = "ProjectIdentifiers")
public class ProjectIdentifiersController {

    @PostMapping
    @Operation(summary = "Create projectIdentifiers")
    public ProjectIdentifiersResponse create(
        @RequestBody ProjectIdentifiersCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update projectIdentifiers")
    public ProjectIdentifiersResponse update(
        @PathVariable Long id,
        @RequestBody ProjectIdentifiersUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete projectIdentifiers")
    public void delete(
        @RequestBody ProjectIdentifiersDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id projectIdentifiers")
    public ProjectIdentifiersResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all projectIdentifiers")
    public List<ProjectIdentifiersResponse> list() {
        return null;
    }
}
