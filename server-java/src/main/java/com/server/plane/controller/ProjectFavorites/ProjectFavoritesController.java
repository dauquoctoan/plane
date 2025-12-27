
package com.server.plane.controller.ProjectFavorites;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.ProjectFavorites.*;

@RestController
@RequestMapping("/api/projectFavorites")
@RequiredArgsConstructor
@Tag(name = "ProjectFavorites")
public class ProjectFavoritesController {

    @PostMapping
    @Operation(summary = "Create projectFavorites")
    public ProjectFavoritesResponse create(
        @RequestBody ProjectFavoritesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update projectFavorites")
    public ProjectFavoritesResponse update(
        @PathVariable Long id,
        @RequestBody ProjectFavoritesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete projectFavorites")
    public void delete(
        @RequestBody ProjectFavoritesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id projectFavorites")
    public ProjectFavoritesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all projectFavorites")
    public List<ProjectFavoritesResponse> list() {
        return null;
    }
}
