
package com.server.plane.controller.ModuleFavorites;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.ModuleFavorites.*;

@RestController
@RequestMapping("/api/moduleFavorites")
@RequiredArgsConstructor
@Tag(name = "ModuleFavorites")
public class ModuleFavoritesController {

    @PostMapping
    @Operation(summary = "Create moduleFavorites")
    public ModuleFavoritesResponse create(
        @RequestBody ModuleFavoritesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update moduleFavorites")
    public ModuleFavoritesResponse update(
        @PathVariable Long id,
        @RequestBody ModuleFavoritesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete moduleFavorites")
    public void delete(
        @RequestBody ModuleFavoritesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id moduleFavorites")
    public ModuleFavoritesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all moduleFavorites")
    public List<ModuleFavoritesResponse> list() {
        return null;
    }
}
