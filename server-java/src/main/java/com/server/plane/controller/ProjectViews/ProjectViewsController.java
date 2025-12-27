
package com.server.plane.controller.ProjectViews;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.ProjectViews.*;

@RestController
@RequestMapping("/api/projectViews")
@RequiredArgsConstructor
@Tag(name = "ProjectViews")
public class ProjectViewsController {

    @PostMapping
    @Operation(summary = "Create projectViews")
    public ProjectViewsResponse create(
        @RequestBody ProjectViewsCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update projectViews")
    public ProjectViewsResponse update(
        @PathVariable Long id,
        @RequestBody ProjectViewsUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete projectViews")
    public void delete(
        @RequestBody ProjectViewsDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id projectViews")
    public ProjectViewsResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all projectViews")
    public List<ProjectViewsResponse> list() {
        return null;
    }
}
