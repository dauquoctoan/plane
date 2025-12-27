
package com.server.plane.controller.IssueViewFavorites;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.IssueViewFavorites.*;

@RestController
@RequestMapping("/api/issueViewFavorites")
@RequiredArgsConstructor
@Tag(name = "IssueViewFavorites")
public class IssueViewFavoritesController {

    @PostMapping
    @Operation(summary = "Create issueViewFavorites")
    public IssueViewFavoritesResponse create(
        @RequestBody IssueViewFavoritesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update issueViewFavorites")
    public IssueViewFavoritesResponse update(
        @PathVariable Long id,
        @RequestBody IssueViewFavoritesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete issueViewFavorites")
    public void delete(
        @RequestBody IssueViewFavoritesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id issueViewFavorites")
    public IssueViewFavoritesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all issueViewFavorites")
    public List<IssueViewFavoritesResponse> list() {
        return null;
    }
}
