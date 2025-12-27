
package com.server.plane.controller.PageFavorites;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.PageFavorites.*;

@RestController
@RequestMapping("/api/pageFavorites")
@RequiredArgsConstructor
@Tag(name = "PageFavorites")
public class PageFavoritesController {

    @PostMapping
    @Operation(summary = "Create pageFavorites")
    public PageFavoritesResponse create(
        @RequestBody PageFavoritesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update pageFavorites")
    public PageFavoritesResponse update(
        @PathVariable Long id,
        @RequestBody PageFavoritesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete pageFavorites")
    public void delete(
        @RequestBody PageFavoritesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id pageFavorites")
    public PageFavoritesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all pageFavorites")
    public List<PageFavoritesResponse> list() {
        return null;
    }
}
