
package com.server.plane.controller.CycleFavorites;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.CycleFavorites.*;

@RestController
@RequestMapping("/api/cycleFavorites")
@RequiredArgsConstructor
@Tag(name = "CycleFavorites")
public class CycleFavoritesController {

    @PostMapping
    @Operation(summary = "Create cycleFavorites")
    public CycleFavoritesResponse create(
        @RequestBody CycleFavoritesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update cycleFavorites")
    public CycleFavoritesResponse update(
        @PathVariable Long id,
        @RequestBody CycleFavoritesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete cycleFavorites")
    public void delete(
        @RequestBody CycleFavoritesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id cycleFavorites")
    public CycleFavoritesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all cycleFavorites")
    public List<CycleFavoritesResponse> list() {
        return null;
    }
}
